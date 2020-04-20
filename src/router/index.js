import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    //首页
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        children: [{
            path: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: { title: '艾编程后台首页', icon: 'dashboard' }

        }]
    },

    // 讲师路由管理！
    {
        path: '/edu/teacher',
        component: Layout,
        redirect: '/edu/teacher/list',
        name: 'Teacher',
        meta: {
            title: '讲师管理', icon: 'peoples'
        },
        children: [{
            path: 'list',
            name: 'EduTeacherList',
            component: () =>
                import ('@/views/edu/teacher/list'),
            meta: {
                title: '讲师列表'
            }
        }, {
            path: 'create',
            name: 'EduTeacherCreate',
            component: () =>
                import ('@/views/edu/teacher/form'),
            meta: {
                title: '添加讲师'
            }
        },{
            path: 'edit/:id',
            name: 'EduTeacherEdit',
            component: () =>
                import ('@/views/edu/teacher/form'),
            meta: {
                title: '编辑讲师', naCache: true
            },
            hidden: true
        }]
    },

    { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})