export {};
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable camelcase */
// import _axios, { AxiosError } from 'axios';
// import jwtDecode from 'jwt-decode';
// import settings from 'settings/appConfig.json';
// import { TESTING_TOKEN_MOCK } from 'settings/constants';
// import { IParsedOauthToken } from 'ts/additionalApi';
// import { ETokens } from 'ts/enums';

// interface IProps {
//     refreshTokenIS: string;
//     accessTokenIS: string;
//     accessTokenAPIM: string;
// }

// interface IResponse {
//     token: string;
//     error: string;
//     shouldReload?: boolean;
// }

// // to stop spamming requests to get a new token when there are multiple async at once
// let isBlockedISApiCall = false;
// let isBlockedAPIMApiCall = false;
// const BLOCKING_TIME = 10;
// const axios = _axios.create();

// const isTokenExpired = (decodedToken: IParsedOauthToken) => {
//     if (settings.isMocked) return false;

//     // console.log(
//     //     // `Issued by: ${decodedToken.iss}, expires in: ${Math.floor(decodedToken.exp - 59 * 60 - Date.now() / 1000)}s`
//     //     `Issued by: ${decodedToken.iss}, expires in: ${Math.round(
//     //         Math.floor(decodedToken.exp - Date.now() / 1000) / 60
//     //     )}m`
//     // );

//     if (decodedToken.exp > Date.now() / 1000) {
//         return false;
//     }
//     return true;
// };

// // validation of IS token
// const validateISToken = async (accessTokenIS: string, refreshTokenIS: string): Promise<string> => {
//     if (!accessTokenIS || (isTokenExpired(jwtDecode(accessTokenIS) as IParsedOauthToken) && !isBlockedISApiCall)) {
//         isBlockedISApiCall = true;

//         try {
//             const responseIS = await axios({
//                 url: process.env.REACT_APP_OAUTH_URL + '/oauth2/token',
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 data: {
//                     grant_type: 'refresh_token',
//                     refresh_token: refreshTokenIS,
//                     client_id: process.env.REACT_APP_OAUTH_CLIENT_ID
//                 }
//             });

//             setTimeout(() => {
//                 isBlockedISApiCall = false;
//             }, BLOCKING_TIME);

//             localStorage.setItem(ETokens.ACCESS_IS, responseIS.data.access_token);
//             localStorage.setItem(ETokens.REFRESH_IS, responseIS.data.refresh_token);

//             return responseIS.data.access_token;
//         } catch (error) {
//             console.log('Error refreshing IS token:', (error as Error).message);
//             throw error;
//         }
//     } else {
//         return accessTokenIS;
//     }
// };

// export const verifyToken = async ({ refreshTokenIS, accessTokenIS, accessTokenAPIM }: IProps): Promise<IResponse> => {
//     // approve when app is mocked
//     if (settings.isMocked) return { token: TESTING_TOKEN_MOCK, error: '', shouldReload: false };

//     // test APIM and IS token and refresh if necessary
//     try {
//         // step 0 validate refresh IS token
//         if (!refreshTokenIS) {
//             console.log('No IS refresh. Need to log in');
//             return { token: '', error: 'No IS refresh. Need to log in', shouldReload: true };
//         }

//         // step 1 validate IS token || send IS refresh to get new access token
//         const newAccessTokenIS = await validateISToken(accessTokenIS, refreshTokenIS);

//         // step 2 validate APIM token || use new IS access token to get new APIM access
//         if (
//             (!accessTokenAPIM || isTokenExpired(jwtDecode(accessTokenAPIM) as IParsedOauthToken)) &&
//             !isBlockedAPIMApiCall
//         ) {
//             isBlockedAPIMApiCall = true;

//             const responseAPIM = await axios({
//                 data: { accessTokenIS: newAccessTokenIS },
//                 url: process.env.REACT_APP_IS_LOCAL_SERVER
//                     ? `${process.env.REACT_APP_OAUTH_LOCAL_APIM}/auth2`
//                     : '/auth2',
//                 method: 'post'
//             });

//             setTimeout(() => {
//                 isBlockedAPIMApiCall = false;
//             }, BLOCKING_TIME);

//             accessTokenAPIM = responseAPIM.data.access_token;

//             localStorage.setItem(ETokens.ACCESS_APIM, responseAPIM.data.access_token);
//         }

//         // step 3 return new / old valid APIM acess token
//         return { token: accessTokenAPIM, error: '', shouldReload: false };
//     } catch (error) {
//         console.log(error);
//         // @ts-ignore
//         const errorMessage = (error as AxiosError).response?.data?.error_description || (error as AxiosError).message;
//         return { token: '', error: errorMessage, shouldReload: false }; // Token is invalid or has expired
//     }
// };
