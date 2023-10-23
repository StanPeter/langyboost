// import React, { useEffect, useState } from 'react';
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import _axios, { AxiosError, AxiosResponse } from 'axios';
// import { translateTextFunc } from 'components/hoc/TranslateText';
// import { useDispatch } from 'react-redux';
// import { verifyToken } from 'services/verifyToken';
// import { toggleDialog } from 'store/dialogsSlice';
// import { ETokens } from 'ts/enums';
// import { Params, ParamsAny } from 'ts/interfaces';
// import Common from 'utils/common';
// import { v4 as uuidv4 } from 'uuid';
// import settings from '../settings/appConfig.json';

// const getDefaultHeaders = (defaultHeaders: boolean, idInApplication: string, correlationId: string) => {
//     if (defaultHeaders)
//         return {
//             'Envelope-IdInApplication': idInApplication,
//             'Envelope-CorrelationId': correlationId,
//             'Envelope-Application': 'CFE'
//         };

//     return {};
// };

// const getAuthorizationHeader = (accessToken: string, basicToken?: string) => {
//     if (accessToken) return accessToken;
//     return `Basic ${basicToken}`;
// };

// // on BE they use some technology which cannot send me an empty string... therefore I need to ignore some errors and not show them
// const IGNORED_ERRORS = ['EBCQWS02', 'BVECOS01', 'BVECSS08', 'BVECSS07', 'BVECSS05', 'BVECSS06'];

// const cache: Cache = {};

// type Cache = { [url: string]: ParamsAny };

// interface INewParameters {
//     newBody?: ParamsAny;
//     newParams?: ParamsAny;
//     newUrl?: string;
// }

// interface IResponse<TResponse> {
//     data: TResponse | null;
//     error: Error | null | AxiosError;
//     isLoading: boolean;
//     refetch: (newParameters: INewParameters) => Promise<{ data: TResponse | null; error: Error | null | AxiosError }>;
//     setData: React.Dispatch<React.SetStateAction<TResponse | null>>;
// }

// interface Props<TResponse> {
//     url: string;
//     method: 'get' | 'post' | 'patch';
//     headers?: Params;
//     body?: ParamsAny;
//     params?: ParamsAny;
//     shouldCache?: boolean;
//     defaultHeaders?: boolean;
//     basicToken?: string;
//     isMocked?: boolean;
//     mockData: TResponse;
//     initialFetch?: boolean;
// }

// const useFetch = <TResponse>({
//     method = 'get',
//     url,
//     body = {},
//     headers = {},
//     params = {},
//     shouldCache = false,
//     defaultHeaders = true,
//     basicToken,
//     isMocked,
//     mockData,
//     initialFetch = true
// }: Props<TResponse>): IResponse<TResponse> => {
//     // hooks
//     const [data, setData] = useState<TResponse | null>(null);
//     const [error, setError] = useState<Error | null>(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const dispatch = useDispatch();

//     const fetchData = async ({ newBody, newParams, newUrl }: INewParameters) => {
//         // constants
//         const refreshTokenIS = Common.getStorageValue(ETokens.REFRESH_IS, 'localStorage');
//         const accessTokenAPIM = Common.getStorageValue(ETokens.ACCESS_APIM, 'localStorage');
//         const accessTokenIS = Common.getStorageValue(ETokens.ACCESS_IS, 'localStorage');
//         const axios = _axios.create();
//         const idInApplication = uuidv4();
//         const correlationId = uuidv4();
//         const usedParams = newParams ? newParams : params;
//         const usedBody = newBody ? newBody : body;
//         const usedUrl = newUrl ? newUrl : url;

//         // get tokens
//         const getValidToken = await verifyToken({ accessTokenAPIM, accessTokenIS, refreshTokenIS });

//         if (!getValidToken.token && (refreshTokenIS || accessTokenAPIM || accessTokenIS)) {
//             // sessionStorage.clear();
//             localStorage.clear();
//             location.reload();
//             console.log('reloading and clearing');
//             return { data: null, error: null };
//         }

//         if (!getValidToken?.token && defaultHeaders) {
//             console.log(getValidToken?.error, ' ERROR');

//             return { data: null, error: new Error('There was an error while verifying the token') };
//         }

//         if (!getValidToken.token || getValidToken.error) {
//             console.log('There was an error while verifying the token');
//             return { data: null, error: new Error('There was an error while verifying the token') };
//         }

//         let response: AxiosResponse;

//         // handle cached data
//         if (shouldCache && cache[usedUrl + JSON.stringify(usedParams) + JSON.stringify(usedBody)]) {
//             // @ts-ignore
//             setData(cache[usedUrl + JSON.stringify(usedParams) + JSON.stringify(usedBody)]);
//             return {
//                 data: cache[usedUrl + JSON.stringify(usedParams) + JSON.stringify(usedBody)] as TResponse,
//                 error: null
//             };
//         }

//         setIsLoading(true);

//         try {
//             if (isMocked || settings.isMocked) {
//                 // Common.sleep(() => {
//                 console.log(mockData, 'MOCK DATA', url);
//                 setData(mockData);
//                 return { data: mockData as TResponse, error: null };
//                 // }, 200);
//             }

//             response = await axios({
//                 url: usedUrl,
//                 method: method,
//                 baseURL: process.env.REACT_APP_BASE_API_URL,
//                 params: usedParams,
//                 headers: {
//                     ...getDefaultHeaders(defaultHeaders, idInApplication, correlationId),
//                     ...headers,
//                     Authorization: getAuthorizationHeader(getValidToken.token, basicToken)
//                 },
//                 data: usedBody
//             });

//             // handle fetching request data for 2** response
//             if (response.status.toString()[0] === '2') {
//                 // Error handling for Business error
//                 if (response.data.error && !IGNORED_ERRORS.includes(response.data.error.code)) {
//                     dispatch(
//                         toggleDialog({
//                             dialogData: {
//                                 headerMessage: response.data.error.message,
//                                 type: 'business'
//                             },
//                             dialogName: 'errorDialog',
//                             dialogState: true
//                         })
//                     );

//                     setError(new Error(response.data.error.message));
//                     return { data: null, error: new Error(response.data.error.message) };
//                 }

//                 // caching the output
//                 if (shouldCache) cache[usedUrl + JSON.stringify(usedParams) + JSON.stringify(usedBody)] = response.data;

//                 setData(response.data);
//                 return { data: response.data as TResponse, error: null };
//             }

//             return { data: response.data as TResponse, error: null };
//         } catch (e) {
//             console.log(e, ' response CATCH');
//             const errorMessage: string = (e as any).response?.data?.errorMessage || '';

//             dispatch(
//                 toggleDialog({
//                     dialogData: {
//                         errorMessage: errorMessage,
//                         correlationId: correlationId,
//                         idInApplication: idInApplication,
//                         headerMessage: translateTextFunc('SOMETHING_WENT_WRONG')
//                     },
//                     dialogName: 'errorDialog',
//                     dialogState: true
//                 })
//             );

//             // return { body: null, error: (e as any).message };
//             setError(e as AxiosError);
//             return { data: null, error: e as AxiosError };
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (initialFetch) fetchData({});
//     }, []); // Run only once on component mount

//     return { data, error, isLoading, refetch: (newParameters: INewParameters) => fetchData(newParameters), setData };
// };

// export default useFetch;
export {}