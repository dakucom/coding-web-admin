import request from '@/utils/request'

// 一个controller对应一个api操作！
const api_name = '/admin/edu/course"'

export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/save-course-info`,
      method: 'post',
      data: courseInfo
    })
  }
}
