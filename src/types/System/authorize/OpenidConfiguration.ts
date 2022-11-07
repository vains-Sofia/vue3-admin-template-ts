/**
 * 授权服务器端点信息
 */
export interface OpenidConfiguration {
    issuer: string;
    authorization_endpoint: string;
    token_endpoint: string;
    token_endpoint_auth_methods_supported: Array<string>;
    jwks_uri: string;
    userinfo_endpoint: string;
    response_types_supported: Array<string>;
    grant_types_supported: Array<string>;
    revocation_endpoint: string;
    revocation_endpoint_auth_methods_supported: Array<string>;
    introspection_endpoint: string;
    introspection_endpoint_auth_methods_supported: Array<string>;
    subject_types_supported: Array<string>;
    id_token_signing_alg_values_supported: Array<string>;
    scopes_supported: Array<string>;
}
