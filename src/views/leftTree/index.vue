<template>
  <div>
    <h3 class="mb-8 mt-20">基本用法</h3>
    <h4 class="color-light">使用tree组件需要绑定ref属性，通过调用this.$refs['ref'].reset()可重新加载tree数据。用于搜索的等功能</h4>
    <h4 class="color-light">http_treedata提供数据回调方法</h4>
    <h4 class="color-light">getCurrentId获取当前点击数据ID</h4>
    <h4 class="color-light">checkData获取当前选中状态data数组集合</h4>
    <div class="d-flex border-outline mt-20">
      <code class=" pr-40 mr-40 border-right"><pre v-text="text1" class="text-18 color-primary"></pre></code>
      <div>
        <obj-left-tree
          ref="leftTree"
          :http_treedata="$http_treeData"
          @getCurrentId="$com_currentId"
          @checkData="$com_checkData"
        ></obj-left-tree>
        <el-button size="small" @click="reset">重新加载</el-button>
      </div>
    </div>
    <h3 class="mb-8 mt-20">样式更改</h3>
    <h4 class="color-light">showCheckbox：是否显示多选框，默认显示</h4>
    <h4 class="color-light">showIcon：是否显示ICON，默认显示</h4>
    <h4 class="color-light">uniformColor：是否统一字体颜色，默认为false</h4>
    <div class="d-flex mt-20 border-outline">
      <code class=" pr-40 mr-40 border-right"><pre v-text="text2" class="text-18 color-primary"></pre></code>
      <obj-left-tree
        ref="leftTree2"
        :showCheckbox="false"
        :showIcon="false"
        :uniformColor="true"
        :http_treedata="$http_treeData"
        @getCurrentId="$com_currentId"
        @checkData="$com_checkData"
      ></obj-left-tree>
    </div>
    <el-tabs v-model="activeName" class="mt-40">
      <el-tab-pane label="属性" name="first">
        <obj-table :thead-data="headerData" :tbody-data="bodyData" class=mt-20></obj-table>
      </el-tab-pane>
      <el-tab-pane label="事件" name="second">
        <obj-table :thead-data="headerData2" :tbody-data="bodyData2" class=mt-20></obj-table>
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
      text1: `<obj-left-tree
  ref="leftTree"
  :http_treedata="$http_treeData"
  @getCurrentId="$com_currentId"
  @checkData="$com_checkData">
</obj-left-tree>`,
      text2: `<obj-left-tree
  ref="leftTree"
  :showCheckbox="false"
  :showIcon="false"
  :uniformColor="true"
  :http_treedata="$http_treeData"
  @getCurrentId="$com_currentId"
  @checkData="$com_checkData">
</obj-left-tree>`,
      headerData: ['属性', '说明', '类型', '默认值'],
      bodyData: [
        [
          'showCheckbox', '是否显示复选框', 'Boolean', 'false'
        ],
        [
          'showIcon', '是否显示ICON图标', 'Boolean', 'false'
        ],
        [
          'uniformColor', '文本颜色是否保持一致', 'Boolean', 'true'
        ],
        [
          'http_treedata', '请求Tree数据的方法，入参为function，<br>需要在获取数据后将数据作为入参传入入参函数', 'Function(func)', '--'
        ]
      ],
      headerData2: ['事件名', '说明', '返回参数'],
      bodyData2: [
        [
          'getCurrentId', '获取当前选中节点ID值', '共一个参数，id：为当前选中ID'
        ],
        [
          'checkData', '获取当前选中项的数据数组集合', '共一个参数，array：为当前选中项的数据数组集合'
        ]
      ]
    }
  },
  methods: {
    reset () {
      this.$refs.leftTree.reset()
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
