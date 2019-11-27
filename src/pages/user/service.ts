import request from '@/utils/request';

/**
 * 唯一验证
 * @param params
 */
export async function unique(params: {}) {
  return request('/api/user/unique', {
    params,
  });
}

/**
 * 分页查询
 * @param params
 */
export async function getPage(params: {}) {
  return request('/api/user', {
    params,
  });
}

/**
 * 根据ID获取数据
 * @param id
 */
export async function getById(id: string) {
  return request(`/api/user/${id}`);
}

/**
 * 新增
 * @param params
 */
export async function add(params: {}) {
  return request('/api/user', {
    method: 'POST',
    data: params,
  });
}

/**
 * 修改
 * @param params
 */
export async function updateById(params: {}) {
  return request('/api/user', {
    method: 'PUT',
    data: params,
  });
}
/**
 * 修改
 * @param params
 */
export async function updatePassWord(params: {}) {
  return request('/api/user/update_password', {
    method: 'PUT',
    data: params,
  });
}
/**
 * 删除
 * @param params
 */
export async function removeByIds(params: { ids: [] }) {
  return request(`/api/user/${new Array(params.ids).join(',').toString()}`, {
    method: 'DELETE',
  });
}