<template>
  <div class="upload">
    <el-form
      :model="form"
      label-width="110px"
      ref="form"
    >
      <el-form-item prop="logo">
        <obj-upload
          @uploadimg="uploadimg"
          @removeimg="removeimg"
          :action="action"
          :imgList="form.img"
          :limit="limit"
          :uploadText="uploadText"
        ></obj-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        img: []
      },
      action: 'http://10.221.56.94/mock/49/',
      uploadText: '上传Logo',
      limit: '3'
    }
  },
  methods: {
    removeimg (item) {
      this.form.img = item
    },
    uploadimg (item) {
      this.form.img.push(item)
    }
  }
}
</script>
