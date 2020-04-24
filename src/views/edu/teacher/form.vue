<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name" />
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" :min="0" controls-position="right" />
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <!--
            数据类型一定要和取出的json中的一致，否则没法回填
            因此，这里value使用动态绑定的值，保证其数据类型是number
          -->
          <el-option :value="1" label="高级讲师" />
          <el-option :value="2" label="首席讲师" />
        </el-select>
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career" />
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea" />
      </el-form-item>

      <!-- 讲师头像：TODO -->
      <el-form-item label="讲师头像">
        <!-- 头像缩略图 -->
        <pan-thumb :image="teacher.avatar" />
        <!-- 上传文件的按钮 -->
        <el-button type="primary" icon="upload" @click="imagecropperShow=true">更换头像</el-button>
      </el-form-item>

      <!-- 头像 -->
      <image-cropper
        v-show="imagecropperShow"
        :width="300"
        :height="300"
        :key="imagecropperKey"
        :url="BASE_API + '/admin/oss/file/upload'"
        field="file"
        lang-type="en"
        @close="close"
        @crop-upload-success="cropSuccess"
      />

      <!-- 我们这个保存是复用的，如果是新增页面就是保存，如果是修改页面就是修改！ -->
      <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
    </el-form>
  </div>
</template>

<script>
import teacher from "@/api/edu/teacher"
import ImageCropper from "@/components/ImageCropper"
import PanThumb from "@/components/PanThumb"
// 定义绑定我们表单的数据
const defaultForm = {
  name: '',
  sort: 0,
  level: 1,
  career: '',
  intro: '',
  avatar: 'https://dakuzai-edu.oss-cn-beijing.aliyuncs.com/avatar/dafault.jpg'
}
export default {
  components: { ImageCropper, PanThumb },
  // 因为元素使用了双向绑定，编写数据！
  data() {
    return {
      teacher: defaultForm,
      saveBtnDisabled: false, // 保存按钮的禁用
      imagecropperShow: false,
      imagecropperKey: 0,
      BASE_API: process.env.BASE_API
    }
  },
  //watch监视，当我们的路由发生了变化，就执行这个方法
  watch: {
    $router(to, from) {
      this.init()
    }
  },
  // 钩子函数！ created 在页面渲染前调用方法, 如果页面是同一个，数据不会刷新！只会进行一次！
  created() {
    console.log("created")
    this.init()
  },

  methods: {
    //初始化
    init() {
      //判断路由参数
      if (this.$route.params && this.$route.params.id) {
        const id = this.$route.params.id
        //回调当前数据
        this.fetchDataById(id)
      } else {
        this.teacher = { ...defaultForm }
      }
    },
    //保存
    saveOrUpdate() {
      this.saveBtnDisabled = true
      //判断是否有id
      if (!this.teacher.id) {
        this.saveData()
      } else {
        this.updateData()
      }
    },

    // 更新
    updateData() {
      teacher
        .updateById(this.teacher)
        .then(response => {
          return this.$message({
            type: "success",
            message: "修改成功！!"
          })
        })
        .then(response => {
          this.$router.push({ path: "/edu/teacher" })
        })
    },
    // 保存 ，如果自己理解逻辑！重启一下！
    saveData() {
      teacher
        .save(this.teacher)
        .then(response => {
          return this.$message({
            type: "success",
            message: "保存成功！!"
          })
        })
        .then(response => {
          this.$router.push({ path: "/edu/teacher" })
        })
    },

    // 拿到后端的数据之后，去查询数据即可！
    fetchDataById(id) {
      teacher.getById(id).then(response => {
        console.log(response) // 成功拿到数据了，并且我们将新增和修改的页面请求处理完毕！
        this.teacher = response.data.item
      })
    },
    // 上传成功
    cropSuccess(data) {
      console.log(data)
      this.imagecropperShow = false
      this.teacher.avatar = data.url
    },

    // 关闭
    close() {
      this.imagecropperShow = false
    }

  }
}
</script>

<style>
</style>