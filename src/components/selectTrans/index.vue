<template>
  <div class="selectTrans">
      <div class="mt-12 border-outline searchBlock">
        <div class="listBlock" v-for="(blockMount,index) in allOptions" :key="blockMount.index">
          <el-autocomplete
            v-model="queryStringEnter[index]"
            class="inline-input searchList"
            :fetch-suggestions="querySearch"
            placeholder="名称/拼音首字母"
            @select="handleSelect"
            value-key="name"
            suffix-icon="el-icon-search"
            @focus="changeItemContent(allOptions[index].data,index)"
          ></el-autocomplete>
          <div class="mt-20 searchItemList">
            <div v-for="(item) in allOptions[index].data" :key="item.index" @click="clickThis(item,index);" :class="breadcrumbCSS.indexOf(item.parentId)!=-1?'activeSelect':''">{{item.name}}
              <span class="float-right o-icon" v-if="item.leaf==0">&#xe6d2;</span>
            </div>
          </div>
        </div>
      </div>
      <div class="breadcrumb p-8 pl-16 mt-12">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="d-inline-block">
          <span class="float-left">已选类目：</span>
          <el-breadcrumb-item v-for="item in breadcrumbName" :key="item.index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    url: String,
    selectType: String
  },
  data () {
    return {
      currentIndex: null,
      queryStringEnter: [],
      allOptions: [],
      suggesList: [],
      breadcrumbList: [],
      breadcrumbCSS: [],
      breadcrumbName: [],
      selectedItem: []
    }
  },
  methods: {
    clickThis (item, index) {
      this.breadcrumbList.splice(index)
      this.breadcrumbList.push(item)
      this.breadcrumbName.splice(index)
      this.breadcrumbName.push(item.name)
      this.$emit('breadcrumbName', this.breadcrumbName)
      this.selectedItem = []
      this.selectedItem.push(item)
      if (item.leaf === 1 || this.selectType === 'selectClass') {
        // console.log('"123333"')
        this.$emit('selectedItem', this.selectedItem)
      } else {
        // console.log('"123344443"', this.selectType)
        this.selectedItem = []
        this.$emit('selectedItem', this.selectedItem)
      }
      this.breadcrumbCSS = []
      this.breadcrumbList.forEach(el => {
        this.breadcrumbCSS.push(el.parentId)
      })
      let thisIndex = index + 1
      this.allOptions.splice(thisIndex)
      const that = this
      if (item.leaf === 0) {
        that.$http.post(that.$service.listtree, {
          parentId: item.parentId
        }).then(res => {
          that.allOptions.push(res.data)
        })
      }
    },
    // 搜索建议
    changeItemContent (data, index) {
      this.suggesList = data
      this.currentIndex = index
    },
    querySearch (queryString, cb) {
      var suggesList = this.suggesList
      var results = queryString ? suggesList.filter(this.createFilter(queryString)) : suggesList
      cb(results)
    },
    createFilter (queryString) {
      return (suggesList) => {
        return (suggesList.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      this.clickThis(item, this.currentIndex)
    }
  },
  mounted () {
    this.$http.post(this.url, {
      parentId: ''
    }).then(res => {
      this.allOptions.push(res.data)
    })
  }
}
</script>
