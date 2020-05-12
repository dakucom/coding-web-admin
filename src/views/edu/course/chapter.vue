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
        @click="previous">上一步</el-button>
      <el-button
        :disabled="saveBtnDisabled"
        style="margin-top: 12px;"
        @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1, // 步骤条当前激活
      saveBtnDisabled: false // 保存按钮是否禁用
    }
  },
  methods: {
    previous() {
      console.log('info')
      this.$router.push({ path: '/edu/course/info/1' })
    },
    next() {
      console.log('publish')
      this.$router.push({ path: '/edu/course/publish/1' })
    }
  }
}
</script>
<style>
</style>
