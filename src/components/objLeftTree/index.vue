<template>
  <!-- 懒加载、手风琴、多选框 -->
  <el-tree
  :props="treeProps"
  :load="$com_loadNode"
  node-key="id"
  lazy
  accordion
  show-checkbox
  :render-content="$com_renderContent"
  @node-click="$com_searchTree"
  @check-change="$com_checkChange"
  >
  </el-tree>
</template>
<script>
export default {
  data () {
    return {
      treeProps: {
        label: 'name', // 指定节点标签为节点对象的某个属性值
        children: 'childs' // 指定子树为节点对象的某个属性值
        // disabled: 'zones', // 指定节点选择框是否禁用为节点对象的某个属性值
        // isLeaf: 'leaf' // 是否为叶子节点
      }
    }
  },
  methods: {
    addTreeNode (func) {
      const that = this
      that.$http.post(that.$service.listtree, {
        parentId: ''
      }).then(res => {
        console.log(res)
        let data = res.data.data
        if (!func) {
          // that.treeData = data
          if (res.data.data.length <= 0) return
          this.$emit('getOrgCode', res.data.data[0].orgCode)
        } else {
          func(data || [])
        }
      })
    },
    $com_loadNode (node, resolve) {
      const that = this
      that.addTreeNode(resolve)
    },
    // 传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
    $com_checkChange (data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    $com_renderContent (h, { node, data, store }) {
      return h('span', [
        h('span', {}, node.label + 'yangxiong')
      ])
    },
    $com_searchTree () {
      return 1
    }
  }
}
</script>
