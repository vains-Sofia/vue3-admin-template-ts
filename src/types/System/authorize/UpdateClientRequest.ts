import type { ClientSettings, TokenSettings } from './FindClientResponse';

export interface UpdateClientRequest {
    id: string;
    clientId: string;
    clientSecret: string;
    clientName: string;
    clientProfile: string;
    clientIdIssuedAt: string;
    clientAuthenticationMethods: Array<string>;
    authorizationGrantTypes: Array<string>;
    redirectUris: Array<string>;
    scopes: Array<string>;
    tokenSettings: TokenSettings;
    clientSettings: ClientSettings;
}
