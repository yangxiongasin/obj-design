<template>
  <div>
    <h3 class="mb-8 mt-20">使用说明</h3>
    <h4 class="color-light">
      该table组件仅限于使用带checkbox、操作列的简单展示表单，功能性的页面烦请自行封装
    </h4>
    <ocj-table
      :data="tableData"
      :column="tableColumn"
      :cellClassName="cellClassName"
      operationWidth="140px"
      @onSelect="getCheckbox"
      class="mt-24"
    >
      <div slot="operationColumn" slot-scope="scope">
        <el-button type="text" size="small" @click="$onEditAttr(scope.slotScope)"
        >编辑</el-button
        >
        <el-button type="text" size="small">属性值管理</el-button>
      </div>
    </ocj-table>
    <h3 class="mb-8 mt-20">column用法</h3>
    <h4 class="color-light">checkData获取当前选中状态data数组集合</h4>
    <div class="d-flex border-outline mt-20">
      <code class=" pr-40 mr-40 border-right"
      ><pre v-text="text1" class="text-18 color-primary"></pre
      ></code>
      <div class="text-16 flex-ju-al-center">
        column里面第一个key: value为字段key和table头字段label，
        第二个参数为formatter数据处理函数，可对改列数据进行处理
      </div>
    </div>
    <h3 class="mb-8 mt-20">cellClassName用法</h3>
    <h4 class="color-light">cellClassName用于对表单列的样式处理返回值为className</h4>
    <div class="d-flex border-outline mt-20">
      <code class=" pr-40 mr-40 border-right"
      ><pre v-text="text2" class="text-18 color-primary"></pre
      ></code>
      <div class="text-16 flex-ju-al-center">
      </div>
    </div>
    <el-tabs v-model="activeName" class="mt-40">
      <el-tab-pane label="属性" name="first">
        <obj-table
          :thead-data="headerData"
          :tbody-data="bodyData"
          class="mt-20"
        ></obj-table>
      </el-tab-pane>
      <el-tab-pane label="事件" name="second">
        <obj-table
          :thead-data="headerData2"
          :tbody-data="bodyData2"
          class="mt-20"
        ></obj-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkData: '',
      tableData: [],
      tableColumn: [
        {
          propNameId: '属性项ID'
        },
        {
          propName: '属性项'
        },
        {
          propNameAlias: '属性别名'
        },
        {
          propValue: '属性值'
        },
        {
          status: '状态',
          formatter (row) {
            return row.status ? '启用' : '禁用'
          }
        },
        {
          fillType: '填写方式'
        },
        {
          empty: '必填',
          formatter (row) {
            return row.empty ? '是' : '否'
          }
        }
      ],
      tableCheckData: [],
      text1: `[
  {
    propNameId: '属性项ID'
  },
  {
    propName: '属性项',
    formatter (row) {
      return row.status ? '启用' : '禁用'
    }
  }
]`,
      text2: `cellClassName (cell) {
  let className
  switch (cell.column.property) {
    case 'status':
      className = cell.row.status ? 'color-0bb07b' : 'color-f03d3d'
      break
  }
  return className
}`,
      activeName: 'first',
      headerData: ['属性', '说明', '类型', '默认值'],
      bodyData: [
        ['data', '显示的数据', 'Array', '[]'],
        [
          'column',
          'table列的配置参数，数组内部数据以对象形式存在，第一个key跟value值为属性名和属性key',
          'Array', '[]'
        ],
        [
          'cellClassName',
          '样式设置回调函数，返回参数为cell数据;具体使用方法参考上述文档',
          'Function(cell)', '----'
        ],
        [
          'operationWidth',
          '设置操作项宽度',
          'String', 'auto'
        ],
        [
          'checkbox',
          '是否展示多选框',
          'Boolean', 'true'
        ]
      ],
      headerData2: ['事件名', '说明', '返回参数'],
      bodyData2: [
        [
          'onSelect',
          '当checkbox状态发生时实时获取当前table的选中项',
          '返回参数： [{...}],数组里面包裹每一行的数据'
        ]
      ]
    }
  },
  watch: {
    tableCheckData (val) {
      let data = []
      val.map(value => {
        data.push(value.id)
      })
      this.checkData = data.join(',')
      console.log(this.checkData)
    }
  },
  mounted () {
    this.$httpGetTable()
  },
  methods: {
    $httpGetTable () {
      const that = this
      that.$http
        .post(that.$service.listTable, {})
        .then(res => {
          this.tableData = res.data.data.content
        })
    },
    cellClassName (cell) {
      let className
      switch (cell.column.property) {
        case 'status':
          className = cell.row.status ? 'color-0bb07b' : 'color-f03d3d'
          break
      }
      return className
    },
    getCheckbox (data) {
      this.tableCheckData = data || []
    },
    $onEditAttr (row) {
      console.log(row)
    }
  }
}
</script>
