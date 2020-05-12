<template>
  <div class="app-container">
    <h2 style="text-align: center">发布课程</h2>
    <el-steps
      :active="active"
      align-center
      style="margin-bottom: 40px;"
      finish-status="success">
      <el-step title="填写课程信息" />
      <el-step title="创建课程大纲" />
      <el-step title="发布课程" />
    </el-steps>
    <!-- 章节信息 -->
    <div style="text-align: center">
      <el-button
        :disabled="saveBtnDisabled"
        style="margin-top: 12px;"
        @click="previous">返回修改</el-button>
      <el-button
        :disabled="saveBtnDisabled"
        style="margin-top: 12px;"
        @click="publish">发布课程</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2, // 步骤条当前激活
      saveBtnDisabled: false // 保存按钮是否禁用
    }
  },
  methods: {
    previous() {
      console.log('chapter')
      this.$router.push({ path: '/edu/course/chapter/1' })
    },
    publish() {
      console.log('next')
      //   this.$router.push({ path: '/edu/course/chapter/1' })
      this.active = 3
    }
  }
}
</script>
<style>
</style>
