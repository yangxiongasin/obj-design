<template>
  <div class="selectTrans">
      <div class="mt-12 border-outline searchBlock">
        <div class="listBlock" v-for="(blockMount,index) in allOptions" :key="blockMount.index">
          <el-input class="searchList" placeholder="名称/拼音首字母" suffix-icon="el-icon-search"></el-input>
          <div class="mt-20 searchItemList">
            <div v-for="item in allOptions[index].data" :key="item.index" @click="clickThis(item,index)">{{item.name}}
              <span class="float-right iconfont icon-erp-chevron-right" v-if="item.leaf==0"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="breadcrumb p-8 pl-16 mt-12">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="d-inline-block">
          <span class="float-left">已选类目：</span>
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    // dialogVisible: Boolean
  },
  data () {
    return {
      allOptions: []
    }
  },
  methods: {
    clickThis (item, index) {
      console.log(item, 'itemthis')
      console.log(index, '当前点击的数组下标')
      let thisIndex = index + 1
      this.allOptions.splice(thisIndex)
      const that = this
      if (item.leaf === '0') {
        that.$http.post(that.$service.listtree, {
          parentId: item.parentId
        }).then(res => {
          console.log(res.data.data, 'res')
          that.allOptions.push(res.data)
        })
      }
    }
  },
  mounted () {
    this.$http.post(this.$service.listtree, {
      parentId: ''
    }).then(res => {
      console.log(res.data.data, 'res')
      this.allOptions.push(res.data)
      console.log(this.allOptions, 'this.allOptions')
    })
  }
}
</script>
