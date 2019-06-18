<script>
  loadNodephoto(node, resolve) {
    let res1 = [];
// 此处缓存了resolve方法，想通过这种方式来更新节点数据
    this.tmpResolvephoto = resolve;
    if ("level" in node) {
      if (node.level === 0) {
        return resolve([
          {
            folderId: 0,
            folderName: "全部图片",
            parentFolderId: null,
            path: "0:全部图片",
            leaf: false
          }
        ]);
      }
    }
// 这个方法是请求ajax把数据返回
    this.getTreeData(node.data.folderId).then(res => {
      resolve(res);
    });
  },
  // 右侧进入左侧对应展开
  photoExpend(list) {
    let ori = new Set(this.defaultexpendphoto);
    let now = new Set(list);
    let res = new Set([...ori, ...now]);
    res = Array.from(res);
    this.defaultexpendphoto = [];
    this.defaultexpendphoto = res;
  },
  expandHandle(data,node,arg){
    this.photoExpend([data.folderId])
  },
  /** 图片树重新获取节点数据
   * @type:1/2/3 1:当前文件夹/父级/爷爷级
   * @id:文件夹id
   * @idtype:1/2:传入的id是当前/父级
   */
  getPhotoNodeData(type, id, idtype) {
    console.log(type, id, idtype)
    let grandId, grandnode, parentnode, parentId, nownode;
// 爷级都需要传父级id
    if (type == 3 && idtype == 2) {
      parentnode = this.$refs.phototree.getNode(id);
      if (parentnode) {
        grandId = parentnode.data.parentFolderId || 0;
        console.log(grandId)
        grandnode = this.$refs.phototree.getNode(grandId);
        this.loadNodephoto(grandnode, this.tmpResolvephoto);
      }
    } else if (type == 2 && idtype == 2) {
      parentnode = this.$refs.phototree.getNode(id);
      if (parentnode) {
        this.loadNodephoto(parentnode, this.tmpResolvephoto);
      }
    } else if (type == 2 && idtype == 1) {
// 父级传入自己的id
      nownode = this.$refs.phototree.getNode(id);
      
      if (nownode) {
        parentId = nownode.data.parentFolderId || 0;
        this.photoExpend([parentId])
        parentnode = this.$refs.phototree.getNode(parentId);
        this.loadNodephoto(parentnode, this.tmpResolvephoto);
      }
    } else {
      console.log(type, idtype);
    }
  }



</script>
