import request from '../Request';
import type { PageTypes } from '@/types/Global/PageTypes';
import type { ResultType } from '@/types/Global/ResultType';
import type { FindClientParam } from '@/types/System/authorize/FindClientParam';
import type { FindClientResponse } from '@/types/System/authorize/FindClientResponse';
import type { OpenidConfiguration } from '@/types/System/authorize/OpenidConfiguration';
import type { UpdateClientRequest } from '@/types/System/authorize/UpdateClientRequest';
import type { RegisterClientRequest } from '@/types/System/authorize/RegisterClientRequest';

/**
 * 获取客户端列表
 * @param param 查询入参
 */
export function findClientList(
    param: FindClientParam
): Promise<ResultType<PageTypes<FindClientResponse>>> {
    return request.get('/oauth2/registeredClient/findClientList', param);
}

/**
 * 根据ID获取客户端信息
 * @param id 客户端id
 */
export function getById(id: string): Promise<ResultType<FindClientResponse>> {
    return request.get(`/oauth2/registeredClient/findById/${id}`);
}

/**
 * 获取授权服务器各个端点及配置信息
 */
export function getOpenidConfiguration(): Promise<OpenidConfiguration> {
    return request.get(
        `http://kwqqr48rgo.cdhttp.cn/.well-known/openid-configuration`
    );
}

/**
 * 修改客户端信息
 * @param param 新的客户端信息
 */
export function updateClient(
    param: UpdateClientRequest
): Promise<ResultType<unknown>> {
    return request.put(`/oauth2/registeredClient/updateClient`, param);
}

/**
 * 注册客户端
 * @param param 新的客户端信息
 */
export function clientRegister(
    param: RegisterClientRequest
): Promise<ResultType<unknown>> {
    return request.post(`/oauth2/registeredClient/register`, param);
}
