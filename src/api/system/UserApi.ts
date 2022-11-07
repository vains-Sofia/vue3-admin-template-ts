import request from '../Request';
import type { PageTypes } from '@/types/Global/PageTypes';
import type { UserRecordsTypes } from '@/types/System/user/UserRecordsTypes';
import type { ResultType } from '@/types/Global/ResultType';
import type { PageParamType } from '@/types/Global/PageParamType';
import type { TokenUserResult } from '@/types/System/authorize/TokenUserResult';

/**
 * 获取当前用户
 */
export function currentUser(): Promise<TokenUserResult> {
    return request.get('/oauth2/user');
}
/**
 * 获取用户列表
 * @param param 请求参数
 */
export function getList(
    param: PageParamType
): Promise<ResultType<PageTypes<UserRecordsTypes>>> {
    return request.get('/system/user/getUserList', param);
}

/**
 * 根据ID获取用户信息
 * @param id 用户ID
 */
export function getById(id: number): Promise<ResultType<UserRecordsTypes>> {
    return request.get(`/system/user/getById/${id}`);
}

/**
 * 根据ID删除用户信息
 * @param id 用户ID
 */
export function deleteById(id: number): Promise<ResultType<string>> {
    return request.delete(`/system/user/deleteUser/${id}`);
}

/**
 * 添加用户信息
 * @param user 参数
 */
export function userInsert(user: unknown): Promise<ResultType<string>> {
    return request.post('/system/user/insertUser', user);
}

/**
 * 修改用户信息
 * @param user 参数
 */
export function userUpdate(user: unknown): Promise<ResultType<string>> {
    return request.put('/system/user/updateUser', user);
}
