<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="subjectTree"
      :data="subjectList"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

  </div>
</template>

<script>
import subject from '@/api/edu/subject'
export default {

  data() {
    return {
      filterText: '', // 过滤文本
      subjectList:[],//数据列表
      defaultProps: {//属性列表数据属性的key，和后端对应
        children: 'children',
        label: 'title'
      }
    }
  },
  //监听
  watch: {
    filterText(val) {
        //过滤
      this.$refs.subjectTree.filter(val)
    }
  },
//添加钩子函数，在初始化时调用
  created(){
      this.fecthNodeList()
  },

  methods: {
      //获取远程数据
      fecthNodeList() {
          subject.getNestedTreeList().then(response => {
            console.log(response)
            this.subjectList = response.data.items
        })
      },
    filterNode(value, data) {
      if (!value) return true
      //toLowerCase()全部转化成小写，反之toUpCase()
      return data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    }
  }
}
</script>

