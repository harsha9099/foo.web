import { AuthConfig } from 'angular-oauth2-oidc';

export const DiscoveryDocumentConfig = {
  url : "https://idmcc.b2clogin.com/idmcc.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_cc"
}

export const authConfig: AuthConfig = {
  redirectUri: window.location.origin + '/index.html',
  responseType: 'token id_token',
  issuer: 'https://idmcc.b2clogin.com/b6336d91-19ac-4844-9585-f53f71498c49/v2.0/',
  strictDiscoveryDocumentValidation: false,
  tokenEndpoint: 'https://idmcc.b2clogin.com/idmcc.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_cc',
  loginUrl: 'https://idmcc.b2clogin.com/idmcc.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_cc',
  clientId: 'e4dcbad6-4500-47f8-88ec-fafe40f6fdff',
  scope: 'openid profile https://idmcc.onmicrosoft.com/credit-coach-ad/user_impersonation',
  skipIssuerCheck: true,
  clearHashAfterLogin: true,
  oidc: true,
}
 