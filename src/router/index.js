import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [{
  'path': '/login',
  'component': () =>
      import('@/views/login/index'),
  'hidden': true
},
{
  'path': '/404',
  'component': () =>
      import('@/views/404'),
  'hidden': true
},
  // 首页
{
  'path': '/',
  'component': Layout,
  'redirect': '/dashboard',
  'name': 'Dashboard',
  'children': [{
    'path': 'dashboard',
    'component': () =>
        import('@/views/dashboard/index'),
    'meta': {
      'title': '艾编程后台首页',
      'icon': 'dashboard'
    }

  }]
},

  // 讲师路由管理！
{
  'path': '/edu/teacher',
  'component': Layout,
  'redirect': '/edu/teacher/list',
  'name': 'Teacher',
  'meta': {
    'title': '讲师管理',
    'icon': 'peoples'
  },
  'children': [{
    'path': 'list',
    'name': 'EduTeacherList',
    'component': () =>
        import('@/views/edu/teacher/list'),
    'meta': {
      'title': '讲师列表'
    }
  }, {
    'path': 'create',
    'name': 'EduTeacherCreate',
    'component': () =>
        import('@/views/edu/teacher/form'),
    'meta': {
      'title': '添加讲师'
    }
  }, {
    'path': 'edit/:id',
    'name': 'EduTeacherEdit',
    'component': () =>
        import('@/views/edu/teacher/form'),
    'meta': {
      'title': '编辑讲师',
      'naCache': true
    },
    'hidden': true
  }]
},
  // 课程分类路由管理！
{
  'path': '/edu/subject',
  'component': Layout,
  'redirect': '/edu/subject/list',
  'name': 'Subject',
  'meta': {
    'title': '课程分类管理',
    'icon': 'nested'
  },
  'children': [{
    'path': 'list',
    'name': 'EduSubjectList',
    'component': () =>
        import('@/views/edu/subject/list'),
    'meta': {
      'title': '课程分类列表'
    }
  }, {
    'path': 'import',
    'name': 'EduSubjectListImport',
    'component': () =>
        import('@/views/edu/subject/import'),
    'meta': {
      'title': '导入课程分类'
    }
  }]
},
  // 课程信息路由管理！
{
  'path': '/edu/course',
  'component': Layout,
  'redirect': '/edu/course/list',
  'name': 'Course',
  'meta': {
    'title': '课程信息管理',
    'icon': 'form'
  },
  'children': [{
    'path': 'list',
    'name': 'EduCourseList',
    'component': () =>
          import('@/views/edu/course/list'),
    'meta': {
      'title': '课程信息列表'
    }
  },
    // 步骤逻辑：填写信息->编辑章节->确认发布
  {
    'path': 'info',
    'name': 'EduCourseListInfo',
    'component': () =>
          import('@/views/edu/course/info'),
    'meta': {
      'title': '课程发布'
    }
  },
  {
    'path': 'info/:id',
    'name': 'EduCourseListInfoEdit',
    'component': () =>
          import('@/views/edu/course/info'),
    'meta': {
      'title': '编辑基本课程信息',
      'noCache': true // 去缓存
    },
    'hidden': true
  },
    // 编辑（隐藏路由）
  {
    'path': 'chapter/:id',
    'name': 'EduCourseChapterEdit',
    'component': () =>
          import('@/views/edu/course/chapter'),
    'meta': {
      'title': '编辑课程大纲',
      'noCache': true // 去缓存
    },
    'hidden': true
  },
    // 发送（隐藏路由）
  {
    'path': 'publish/:id',
    'name': 'EduCoursePublish',
    'component': () =>
          import('@/views/edu/course/publish'),
    'meta': {
      'title': '发布课程',
      'noCache': true // 去缓存
    },
    'hidden': true
  }
  ]
},
{
  'path': '*',
  'redirect': '/404',
  'hidden': true
}
]

export default new Router({
  // mode: 'history', //后端支持可开
  'scrollBehavior': () => ({
    'y': 0
  }),
  'routes': constantRouterMap
})
