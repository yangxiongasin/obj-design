<template>
  <div>
    <h3 class="mb-8 mt-20">基本用法</h3>
    <h4 class="color-light">
      使用tree组件需要绑定ref属性，通过调用this.$refs['ref'].reset()可重新加载tree数据。用于搜索的等功能
    </h4>
    <h4 class="color-light">http_treedata提供数据回调方法</h4>
    <h4 class="color-light">getCurrentId获取当前点击数据ID</h4>
    <h4 class="color-light">checkData获取当前选中状态data数组集合</h4>
    <i class="o-icon icon-jiaoyi"></i>
    <i class="iconfont icon-jiaoyi"></i>
    <div class="d-flex border-outline mt-20">
      <code class=" pr-40 mr-40 border-right"
        ><pre v-text="text1" class="text-18 color-primary"></pre
      ></code>
      <div>
        <obj-tree
          ref="ocjtree"
          type="default"
          :http_treedata="$http_treeData"
          @getCurrentId="$com_currentId"
          @checkData="$com_checkData"
        ></obj-tree>
        <el-button size="small" @click="reset">重新加载</el-button>
      </div>
    </div>
    <div class="d-flex mt-20 border-outline">
      <div class="flex-ju-al-center text-16">http_treedata提供数据回调方法示例</div>
      <code class=" pr-40 mr-40 border-right"
      ><pre v-text="text3" class="text-18 color-primary"></pre
      ></code>
    </div>
    <h3 class="mb-8 mt-20">样式更改</h3>
    <h4 class="color-light">type: 包含默认模式（default）和简单模式（simple）</h4>
    <div class="d-flex mt-20 border-outline">
      <code class=" pr-40 mr-40 border-right"
        ><pre v-text="text2" class="text-18 color-primary"></pre
      ></code>
      <obj-tree
        ref="ocjtree2"
        type="simple"
        :http_treedata="$http_treeData"
        @getCurrentId="$com_currentId"
        @checkData="$com_checkData"
      ></obj-tree>
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
      activeName: 'first',
      currentId: '',
      text1: `<obj-tree
  ref="ocjtree"
  :http_treedata="$http_treeData"
  @getCurrentId="$com_currentId"
  @checkData="$com_checkData">
</obj-tree>`,
      text2: `<obj-tree
  ref="ocjtree"
  :http_treedata="$http_treeData"
  @getCurrentId="$com_currentId"
  @checkData="$com_checkData">
</obj-tree>`,
      text3: `HTML:
:http_treedata="$http_treeData"
JS:
$http_treeData (func) {
  this.$http.post(this.$service.listtree, { parentId: this.currentId, }).then(res => {
    if (res.data.data.length <= 0) return
    func(res.data.data || [])
  })
},`,
      headerData: ['属性', '说明', '类型', '默认值'],
      bodyData: [
        ['type', '选择模式，有默认（default）和简单（simple）两种形式', 'String', 'default'],
        [
          'http_treedata',
          '请求Tree数据的方法，入参为function，<br>需要在获取数据后将数据作为入参传入入参函数',
          'Function(func)',
          '--'
        ]
      ],
      headerData2: ['事件名', '说明', '返回参数'],
      bodyData2: [
        [
          'getCurrentId',
          '获取当前选中节点ID值',
          '共一个参数，id：为当前选中ID'
        ],
        [
          'checkData',
          '获取当前选中项的数据数组集合',
          '共一个参数，array：为当前选中项的数据数组集合'
        ]
      ]
    }
  },
  methods: {
    reset () {
      this.$refs.ocjtree.reset()
    },
    $http_treeData (func) {
      const that = this
      that.$http.post(that.$service.listtree, {
        parentId: this.currentId,
        search: '',
        boolean: true
      }).then(res => {
        if (res.data.data.length <= 0) return
        func(res.data.data || [])
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
