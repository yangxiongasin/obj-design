<template>
  <div>
    <obj-left-tree
    :value="demo"
    :show-checkbox="false"
    :show-icon="false"
    :uniform-color="true"
    :http_treedata="$http_treeData"
    @getCurrentId="$com_currentId"
    @checkData="$com_checkData"></obj-left-tree>
    <el-button @click="demo1"></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentId: '',
      demo: true
    }
  },
  methods: {
    demo1 () {
      this.demo = false
      this.$nextTick(() => {
        this.demo = true
      })
    },
    $http_treeData (func, option) {
      const that = this
      that.$http.post(that.$service.listtree, option).then(res => {
        let data = res.data.data
        if (res.data.data.length <= 0) { return false }
        func(data || [])
      })
    },
    $com_currentId (id) {
      this.currentId = id
    },
    $com_checkData (data) {
      console.log(data, 'demo')
    }
  }
}
</script>
