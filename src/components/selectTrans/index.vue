<template>
  <div class="">
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="90%"
      >
      <el-input></el-input>
      <el-button type="primary">搜索</el-button>
      <div class="border-outline border-radius-2 mt-12">
        <div style="height:300px;"></div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">取 消</el-button>
        <el-button type="primary" @click="handleClose()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogVisible: Boolean
  },
  data () {
    return {

    }
  },
  methods: {
    handleClose (done) {
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>
