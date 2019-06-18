<template>
  <div class="selectTrans">
      <div class="mt-12 border-outline searchBlock">
        <div class="listBlock" v-for="(blockMount,index) in allOptions" :key="blockMount.index">
          <!-- <el-input class="searchList" placeholder="名称/拼音首字母" suffix-icon="el-icon-search"></el-input> -->
          <el-autocomplete
            v-model="queryStringEnter"
            class="inline-input searchList"
            :fetch-suggestions="querySearch"
            placeholder="名称/拼音首字母"
            @select="handleSelect"
            value-key="name"
            suffix-icon="el-icon-search"
            @focus="changeItemContent(allOptions[index].data)"
          ></el-autocomplete>
          <div class="mt-20 searchItemList">
            <div v-for="(item,itemIndex) in allOptions[index].data" :key="item.index" @click="clickThis(item,index,itemIndex);" :class="activeSelect==itemIndex&&activeBlock==index?'activeSelect':''">{{item.name}}
              <span class="float-right iconfont icon-erp-chevron-right" v-if="item.leaf==0"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="breadcrumb p-8 pl-16 mt-12">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="d-inline-block">
          <span class="float-left">已选类目：</span>
          <el-breadcrumb-item v-for="item in breadcrumbList" :key="item">{{item}}</el-breadcrumb-item>
          <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
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
      queryStringEnter: '',
      activeBlock: null,
      activeSelect: null,
      allOptions: [],
      suggesList: [],
      breadcrumbList: []
    }
  },
  methods: {
    clickThis (item, index, itemIndex) {
      this.activeBlock = index
      this.activeSelect = itemIndex
      this.breadcrumbList.splice(index)
      this.breadcrumbList.push(item.name)
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
    },
    // 搜索建议
    changeItemContent (data) {
      console.log('被调用', data)
      this.suggesList = data
    },
    querySearch (queryString, cb) {
      var suggesList = this.suggesList
      console.log(suggesList, 'suggesList')
      var results = queryString ? suggesList.filter(this.createFilter(queryString)) : suggesList
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (suggesList) => {
        console.log(suggesList, 'suggesList333')
        return (suggesList.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item, '搜索建议中的handleSelect')
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
