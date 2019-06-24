<template>
  <div>
    <div class="d-flex flex-ju-bet">
      <code class="pr-40 pb-40 mt-40">
        <pre class="color-primary text-16">{{ typeCode }}</pre>
      </code>
    </div>
    <div class="m-20 h4" v-for="item in desc" :key="item">{{item}}</div>
    <select-trans
    @selectedItem="selectedItem"
    @breadcrumbName="breadcrumbName"
    :selectType="selectOne"
    :url="url"
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
      item: '请注意是否设置了单选类格式',
      itemName: '',
      selectType: 'selectOne',
      activeName: 'first',
      headerData: ['参数', '说明', '类型', '值', '默认值'],
      radiusData: [
        ['url', '用于查询Api', 'String', '例 : this.$service.listtree 或者 "/category/list"', '无'],
        ['selectType', '设置单选页子级类目、单选类格式', 'String', '只能单选页子级类目：selectOne、 单选类目或页子级类目：selectClass', 'selectOne']
      ],
      eventsHeader: ['事件名称', '说明', '形参'],
      eventsData: [
        ['selectedItem', '获取当前选中的项的数据', 'data'],
        ['breadcrumbName', '获取当前选中的面包屑数据', 'data']
      ],
      typeCode: `
      <select-trans
      @selectedItem="selectedItem"
      @breadcrumbName="breadcrumbName"
      :selectType="selectOne" //或selectClass(文档中有说明)
      :url="url"
      ></select-trans>`,
      desc: [
        'selectedItem (data) {console.log(data)} 获取当前选中项的数据、数组格式返回',
        'breadcrumbName (data) {this.itemName = data} 获取当前选中项路径 (面包屑) 的数据、数组格式返回',
        'selectType 传入不同代码改变获取数据的模式',
        'url 为查询数据的api'
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
