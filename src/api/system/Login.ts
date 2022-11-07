import request from '../Request';
import type { GetTokenParam } from '@/types/System/authorize/GetTokenParam';
import type { GetTokenResult } from '@/types/System/authorize/GetTokenResult';
import type { AxiosRequestConfig } from 'axios';

/**
 * 通过code换取
 * @param param code，回调地址
 */
export function getToken(param: GetTokenParam): Promise<GetTokenResult> {
    const config: AxiosRequestConfig = {
        headers: {
            Authorization: 'Basic YWRtaW46MTIzNDU2',
        },
    };
    return request.post(
        `http://kwqqr48rgo.cdhttp.cn/oauth2/token?grant_type=${param.grant_type}&code=${param.code}&redirect_uri=${param.redirect_uri}`,
        {},
        config
    );
}
