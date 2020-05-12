import request from '@/utils/request'

// 一个controller对应一个api操作！
const api_name = '/admin/edu/subject'

export default {
  getNestedTreeList() {
    return request({
      url: `${api_name}`,
      method: 'get'
    })
  }
}