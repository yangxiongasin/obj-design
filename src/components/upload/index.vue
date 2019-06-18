<template>
  <div>
    <el-upload
      :action="action"
      list-type="picture-card"
      accept="image/*"
      :limit="imgLimit"
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
      dialogImageUrl: '',
      productImgs: [],
      isMultiple: true,
      imgLimit: 6
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
    $com_imgUploadError () {
      console.log('失败')
      this.$message.error('上传图片失败!')
    },
    $com_handleRemove (file, fileList) {
      // let item = []
      // fileList.forEach(el => {
      //   item.push(el.url)
      // })
      // this.$emit('removeimg', item)
      console.log(file, fileList)
    },
    $com_upLoadSuccess (res, file) {
      // this.$emit('uploadimg', res.message)
      // this.$message({
      //   message: '上传成功',
      //   type: 'success'
      // })
      console.log('3333', '$com_upLoadSuccess')
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    $com_handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
      console.log('1111', '$com_handlePictureCardPreview')
    },
    $com_beforeAvatarUpload (file) {
      console.log('2222', '$com_beforeAvatarUpload')
      console.log(file)
      const isJPG = true
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  mounted () {}
}
</script>
