<template>
  <div>
    <el-upload
      :action="action"
      list-type="picture-card"
      :on-preview="$com_handlePictureCardPreview"
      :on-remove="$com_handleRemove"
      :on-exceed="$com_handleExceed"
      :on-success="$com_upLoadSuccess"
    >
      <i class="el-icon-plus"></i>
      <div
        class="el-upload__text text-12 color-dark"
        style="margin-top:-68px;"
      >{{uploadText}}</div>
    </el-upload>
    <el-dialog
      :visible.sync="dialogVisible"
      width="480px"
    >
      <img
        width="100%"
        :src="dialogImageUrl"
        alt=""
      >
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    imgList: { img: [] },
    limit: '',
    action: '',
    uploadText: ''
  },
  data () {
    return {
      fileList: [],
      upLoadData: {
        img: ''
      },
      baseUrl: '',
      dialogVisible: false,
      dialogImageUrl: ''
    }
  },
  methods: {
    $com_handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 ${this.limit} 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    $com_handleRemove (file, fileList) {
      let item = []
      fileList.forEach(el => {
        item.push(el.url)
      })
      this.$emit('removeimg', item)
    },
    $com_upLoadSuccess (response) {
      const messageArr = []
      if (response) messageArr.push(response.message)
      this.$emit('uploadimg', messageArr)
      this.$message('上传成功')
    },
    $com_handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    $com_beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpg'
      const isJPEG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG && !isJPEG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M && isJPEG && isPNG
    }
  },
  mounted () {
    if (this.imgList.length !== 0) {
      this.imgList.forEach(el => {
        this.fileList.push({ url: el })
      })
    }
  }
}
</script>
