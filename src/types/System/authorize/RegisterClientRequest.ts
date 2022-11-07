import type { ClientSettings, TokenSettings } from './FindClientResponse';

export interface RegisterClientRequest {
    clientId: string;
    clientSecret: string;
    clientName: string;
    clientProfile: string;
    clientAuthenticationMethods: Array<string>;
    authorizationGrantTypes: Array<string>;
    redirectUris: Array<string>;
    scopes: Array<string>;
    tokenSettings: TokenSettings;
    clientSettings: ClientSettings;
}
