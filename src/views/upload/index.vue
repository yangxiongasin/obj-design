<template>
  <div class="upload">
    <obj-upload
      :action="action"
      :uploadText="uploadText"
    ></obj-upload>
  </div>
</template>
<script>
export default {
  data () {
    return {
      action: 'http://10.221.56.94/mock/49/',
      uploadText: '上传Logo'
    }
  },
  methods: {}
}
</script>
