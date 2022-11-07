import type { PageParamType } from '../../Global/PageParamType';

export interface UserListParam extends PageParamType {
    phone?: string;
    email?: string;
    nickName?: string;
    username?: string;
}
