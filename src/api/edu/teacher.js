import request from '@/utils/request'

// 一个controller对应一个api操作！
const api_name = '/admin/edu/teacher'
export default {
  // 分页查询请求
  getPageList(page, pageSize, searchObj) {
    return request({
      url: `${api_name}/${page}/${pageSize}`,
      method: 'get',
      params: searchObj
    })
  },
  // 删除请求
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },
  // 新增讲师
  save(teacher) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: teacher
    })
  },
  // 修改讲师
  updateById(teacher) {
    return request({
      url: `${api_name}/${teacher.id}`,
      method: 'put',
      data: teacher
    })
  },
  // 回显拿到数据,从后端获取当前用户的数据
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  }
}
