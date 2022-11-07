import type { PageParamType } from '../../Global/PageParamType';

export interface FindClientParam extends PageParamType {
    clientId?: string;
    clientName?: string;
}
