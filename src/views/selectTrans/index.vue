<template>
  <div>

    <select-trans
    @selectedItem="selectedItem"
    @breadcrumbName="breadcrumbName"
    :selectType="selectType"
    :url="url"
    ref="sts"
    ></select-trans>

    <div class="mt-20">
      <div>当前选中的数据：{{item}}</div>
    </div>

    <div class="mt-20">
      <div>当前选中的面包屑数据：{{itemName}}</div>
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
      itemName: '',
      selectType: 'selectOne',
      activeName: 'first',
      headerData: ['参数', '说明', '类型', '值', '默认值'],
      radiusData: [
        ['url', '用于查询Api', 'String', '例 : this.$service.listtree 或者 "/category/list"', '无'],
        ['selectType', '用于设置单选页子级类目、多选页子级类目、单选类格式', 'String', '单选页子级类目：selectOne、 多选页子级类目：selectMore、 单选类目：selectClass', 'selectOne']
      ],
      eventsHeader: ['事件名称', '说明', '形参'],
      eventsData: [
        ['selectedItem', '获取当前选中的项的数据', 'data'],
        ['breadcrumbName', '获取当前选中的面包屑数据', 'data']
      ]
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    selectedItem (data) {
      this.item = data
    },
    breadcrumbName (data) {
      this.itemName = data
    }
  }
}
</script>
<style>

</style>
