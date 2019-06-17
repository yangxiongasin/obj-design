<template>
  <div class="">
    <!-- 懒加载、手风琴、多选框 -->
    <el-tree node-key="id"
      :render-content="$com_renderContent"
      lazy accordion show-checkbox
      @check-change="$com_checkChange">
    </el-tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    // 传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
    $com_checkChange (data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    $com_renderContent () {
      return 1
    }
  }
}
</script>
