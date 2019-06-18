<template>
  <div>
    <el-upload
      :action="action"
      :limit="limit"
      :format="format"
      list-type="picture-card"
      accept="image/*"
      :file-list="productImgs"
      :multiple="isMultiple"
      :on-preview="$com_handlePictureCardPreview"
      :on-remove="$com_handleRemove"
      :on-exceed="$com_handleExceed"
      :on-success="$com_upLoadSuccess"
      :on-error="$com_imgUploadError"
      :before-upload="$com_beforeAvatarUpload"
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
    action: '',
    uploadText: '',
    limit: '',
    format: ''
  },
  data () {
    return {
      fileList: [],
      dialogVisible: false,
      dialogImageUrl: '',
      productImgs: [],
      isMultiple: true
    }
  },
  methods: {
    $com_beforeAvatarUpload (file) {
      // console.log('1111', '$com_beforeAvatarUpload')
      this.format.forEach((item, i) => {
        if (this.format[i] !== file.type) {
          this.$message.error('上传图片只能是' + this.format[i] + '格式!')
        }
      })
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isLt2M
    },
    $com_upLoadSuccess (res, file) {
      // console.log('成功', '$com_upLoadSuccess')
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    $com_imgUploadError () {
      // console.log('失败')
      this.$message.error('上传图片失败!')
    },
    $com_handlePictureCardPreview (file) {
      // console.log('2222', '$com_handlePictureCardPreview')
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    $com_handleRemove (file, fileList) {
      // console.log('删除', file, fileList)
    },
    $com_handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 ${this.imgLimit} 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    }
  },
  mounted () {}
}
</script>
