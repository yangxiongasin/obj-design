<template>
  <div>
    <div class="d-flex">
      <pre v-text="dd" class="text-18"></pre>
      <obj-left-tree
        ref="leftTree"
        :http_treedata="$http_treeData"
        @getCurrentId="$com_currentId"
        @checkData="$com_checkData"
      ></obj-left-tree>
    </div>
    <el-button @click="reset"></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentId: '',
      dd: `
<obj-left-tree
  ref="leftTree"
  :http_treedata="$http_treeData"
  @getCurrentId="$com_currentId"
  @checkData="$com_checkData">
</obj-left-tree>`,
      demo: true
    }
  },
  methods: {
    reset () {
      this.$refs.leftTree.$pub_resetTree()
    },
    $http_treeData (func) {
      const that = this
      that.$http
        .post(that.$service.listtree, {
          parentId: this.currentId
        })
        .then(res => {
          let data = res.data.data
          if (res.data.data.length <= 0) {
            return false
          }
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
