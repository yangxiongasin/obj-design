<template>
  <div>

    <select-trans
    @selectedItem="itemInSelectArr"
    :url="url"
    ref="sts"
    ></select-trans>

    <div class="mt-20">
      <div>当前选中的数据：{{item}}</div>
    </div>

    <el-tabs v-model="activeName" class="mt-40">

      <el-tab-pane label="属性" name="first">

        <div class="d-flex border">
          <obj-table
            :thead-data="headerData"
            :tbody-data="radiusData"
          ></obj-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="事件" name="second">

        <div class="d-flex border">
          <obj-table
            :thead-data="eventsHeader"
            :tbody-data="eventsData"
          ></obj-table>
        </div>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>
<script>
export default{

  data () {
    return {
      url: this.$service.listtree,
      item: '',
      activeName: 'first',
      headerData: ['参数', '说明', '类型', '可选值', '默认值'],
      radiusData: [
        ['url', '用于查询Api', 'String', 'click, focus, hover', 'click']
      ],
      eventsHeader: ['事件名称', '说明', '形参'],
      eventsData: [
        ['itemInSelectArr', '获取当前选中的项的数据', 'data']
      ]
    }
  },
  computed: {
  },
  methods: {
    itemInSelectArr (data) {
      console.log(data, '当前选中的数据')
      this.item = data
    }
  }
}
</script>
<style>

</style>
