export interface FindClientResponse {
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

export interface TokenSettings {
    reuseRefreshTokens: boolean;
    accessTokenTimeToLive: number;
    accessTokenTimeToLiveUnit?: string;
    refreshTokenTimeToLive: number;
    refreshTokenTimeToLiveUnit?: string;
}

export interface ClientSettings {
    jwkSetUrl: string;
    requireProofKey: boolean;
    requireAuthorizationConsent: boolean;
}
