<template>
  <div class="popover">
    <obj-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="撒旦教卡号抠脚大汉就卡的黄金卡圣诞节卡后即可"
      v-model="visible"
      :show-footer="showFooter"
      :show-cancel-btn="showCancelBtn"
      @ok="okHandle"
      @cancel="cancelHandle"
      @show="show">
      <el-button slot="obj_reference" @click="visible = !visible">click 激活</el-button>
    </obj-popover>
  </div>
</template>
<script>
export default{
  data () {
    return {
      visible: false,
      showFooter: true,
      showCancelBtn: true
    }
  },
  computed: {
  },
  methods: {
    cancelHandle () {
      this.visible = !this.visible
      console.log('cancel', this.visible)
    },
    okHandle () {
      this.visible = !this.visible
      console.log('ok', this.visible)
    },
    show () {
      console.log('show')
    }
  }
}
</script>
<style>

</style>
