<template>
  <div class="upload">
    <obj-upload
      :action="imgAction"
      :uploadText="imgUploadText"
      :limit="imgLimit"
      :format="imgFormat"
    ></obj-upload>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgAction: 'http://10.221.56.94/mock/49/',
      imgUploadText: '上传Logo',
      imgLimit: 4,
      imgFormat: ['image/jpeg']
    }
  },
  methods: {}
}
</script>
