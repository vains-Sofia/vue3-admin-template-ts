export interface TokenUserResult {
    sub: string;
    aud: Array<string>;
    nbf: string;
    iss: string;
    userNickName: string;
    exp: string;
    iat: string;
    userId: number;
    authorities: Array<string>;
}
