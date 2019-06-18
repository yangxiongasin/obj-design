<template>
  <!-- 懒加载、手风琴、多选框 -->
  <el-tree
    ref="leftTree"
    :props="treeProps"
    :load="$com_loadNode"
    empty-text=""
    node-key="id"
    :expand-on-click-node="false"
    lazy
    accordion
    :show-checkbox="showCheckbox"
    :render-content="$com_renderContent"
    @node-click="$com_clickTree"
    @check-change="$com_checkChange"
  >
  </el-tree>
</template>
<script>
export default {
  name: 'leftTree',
  props: {
    http_treedata: {
      type: Function
    },
    showCheckbox: {
      type: Boolean,
      default: true
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    uniformColor: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      treeProps: {
        label: 'name', // 指定节点标签为节点对象的某个属性值
        children: 'childs', // 指定子树为节点对象的某个属性值
        isLeaf: (data, node) => {
          if (data.leaf === '1') return true
          return false
        } // 是否为叶子节点
      },
      grandNode: '',
      func: null
    }
  },
  methods: {
    // 判断当前节点是否包含子节点
    $com_loadNode (node, resolve) {
      const that = this
      that.func = resolve
      if (node.isLeaf) return
      if (node.data) {
        this.$emit('getCurrentId', node.data.id)
      } else {
        this.grandNode = node
      }
      if (typeof this.http_treedata === 'function') {
        that.http_treedata.call(this, resolve)
      }
    },
    // 传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
    $com_checkChange () {
      const datas = this.$refs.leftTree.getCheckedNodes()
      this.$emit('checkData', datas)
    },
    // render自定义样式渲染
    $com_renderContent (h, { node, data }) {
      const that = this
      let icontooltip = ''
      // 如果是叶子类目并且是禁用状态
      if (node.isLeaf && data.online === '0') {
        icontooltip = '未上线'
      } else if (node.isLeaf && data.status === '0') {
        icontooltip = '已禁用'
      }
      let icon = h(
        'el-tooltip',
        {
          props: {
            effect: 'dark',
            placement: 'top',
            content: icontooltip
          }
        },
        [
          h('span', {
            class: {
              'color-alert': node.isLeaf && data.online === '0',
              'color-error': node.isLeaf && data.status === '0',
              'icon-erp-alert-triangle': node.isLeaf && data.status === '0',
              'icon-erp-eye-off': node.isLeaf && data.online === '0',
              'text-18': true,
              'cursor-not-allowed':
                node.isLeaf && data.status === '0' && !that.uniformColor,
              'mr-4': true
            }
          })
        ]
      )
      if (!that.showIcon) icon = ''
      return h(
        'div',
        {
          class: {
            'flex-ju-al-center': true
          }
        },
        [
          icon,
          h(
            'span',
            {
              class: {
                'color-light': !node.isLeaf || that.uniformColor,
                'color-medium': node.isLeaf && !that.uniformColor,
                'color-input':
                  node.isLeaf && data.status === '0' && !that.uniformColor,
                'text-14': true,
                'cursor-not-allowed':
                  node.isLeaf && data.status === '0' && !that.uniformColor
              }
            },
            node.label
          )
        ]
      )
    },
    // 传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。
    $com_clickTree (data, node, store) {
      this.$emit('getCurrentId', data.id)
    },
    reset () {
      this.$emit('getCurrentId', '')
      this.grandNode.childNodes = []
      this.$com_loadNode(this.grandNode, this.func)
    }
  }
}
</script>
