<template>
  <div class="app-container">
    <!-- 下载 -->
    <el-form label-width="120px">
      <el-form-item label="信息描述">
        <el-tag>excel模板说明</el-tag>
        <el-tag>
          <i class="el-icon-download" />
          <a :href="'https://'+OSS_PATH+'/excel/课程分类列表模板.xls'">点击下载</a>
        </el-tag>
      </el-form-item>
      <el-form-item label="选择Excel">
        <el-upload
          ref="upload"
          :on-success="fileUploadSuccess"
          :on-error="fileUploadErro"
          :disabled="importBtnDisabled"
          :limit="1"
          :auto-upload="false"
          :action="BASE_API+'/admin/edu/subject/import'"
          name="file"
          accept="application/vnd.ms-excel"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button
            :loading="loading"
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload"
          >{{fileUploadBtnText}}</el-button>
          <div slot="tip" class="el-upload__tip">只能上传excel文件，仅且只能上传一个</div>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BASE_API: process.env.BASE_API, //后端接口API地址
      OSS_PATH: process.env.OSS_PATH, //阿里云OSS地址
      importBtnDisabled: false, //按钮禁用
      fileUploadBtnText: "上传到服务器",
      loading: false
    };
  },
  methods: {
    submitUpload() {
      this.fileUploadBtnText = "正在上传"
      this.importBtnDisabled = true
      this.loading = true
      this.$refs.upload.submit()
    },
    fileUploadSuccess(response) {
      if (response.success === true) {
        this.fileUploadBtnText = "导入成功！"
        this.loading = false
        this.$message({
          type: "success",
          message: response.message
        })
      } else {
        this.fileUploadBtnText = "导入失败！"
        this.loading = false
        const message = response.data.errorMsgList
        let msgString = '<ul>'
        message.forEach(msg => {
            msgString += `<li>${msg}</li>`
        })
        msgString += '</ul>' 
        this.$alert(msgString,response.message, {
            dangerouslyUseHTMLString: true
        })
      }
    },
    fileUploadErro() {
        this.fileUploadBtnText = "导入失败！"
        this.loading = false
        this.$message({
          type: "error",
          message: '导入失败！'
        })
    }
  }
};
</script>

<style>
</style>