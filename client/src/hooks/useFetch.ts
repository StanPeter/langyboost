// /* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { toggleDialog } from 'store/dialogsSlice';
// import { Params, ParamsAny } from 'ts/interfaces';

// interface Props {
//     url: string;
//     method: 'get' | 'post';
//     headers?: Params;
//     body?: ParamsAny;
//     params?: Params;
//     shouldCache?: boolean;
// }

// const HEADERS = {
//     // 'Envelope-IdInApplication': '0d0c0b03-a115-42ba-915c-cf1bcca48c25',
//     // 'Envelope-CorrelationId': '583eb365-eab4-4648-8d9e-d73910dc1c62',
//     // 'Envelope-Application': 'CFE',
//     // 'Access-Control-Allow-Origin': true
//     'Access-Control-Allow-Credentials':true
// };

// const cache: Cache = {};

// type Cache = { [url: string]: ParamsAny };

// // to be used within a Component or Hook
// export const useFetch = ({ method, url, body = {}, headers = {}, params = {}, shouldCache = false }: Props) => {
//     const [data, setData] = useState<ParamsAny>();
//     const dispatch = useDispatch();

//     const fetchData = async () => {
//         try {
//             console.log(process.env.REACT_APP_BASE_API_URL, ' ENV');

//             // handle fetching request data
//             const newData = await axios[method](url, {
//                 // baseURL: process.env.REACT_APP_BASE_API_URL,
//                 params: params,
//                 headers: { ...HEADERS, ...headers },
//                 data: body
//             });

//             setData(newData.data);

//             // caching the output
//             if (shouldCache && newData.status === 200) {
//                 cache[url + params?.toString()] = newData.data;
//             }

//             // Error handling for Technical/Internal errors
//             if (newData.status !== 200) {
//                 dispatch(
//                     toggleDialog({
//                         dialogData: {
//                             errorMessage: newData.data.errorMessage,
//                             type: 'business'
//                         },
//                         dialogName: 'errorDialog',
//                         dialogState: true
//                     })
//                 );
//             }

//             // Error handling for Business error
//             if (newData.data.error) {
//                 dispatch(
//                     toggleDialog({
//                         dialogData: {
//                             errorMessage: newData.data.error.message,
//                             type: 'technical'
//                         },
//                         dialogName: 'errorDialog',
//                         dialogState: true
//                     })
//                 );
//             }
//         } catch (error) {
//             console.log(error, ' ERROR');
//             // dispatch(
//             //     toggleDialog({
//             //         dialogData: {
//             //             errorMessage: error,
//             //             type: 'technical'
//             //         },
//             //         dialogName: 'errorDialog',
//             //         dialogState: true
//             //     })
//             // );
//         }
//     };

//     useEffect(() => {
//         if (shouldCache && cache[url + params?.toString()]) {
//             setData(cache[url + params?.toString()]);
//         } else {
//             fetchData();
//         }
//         // eslint-disable-next-line
//     }, []);

//     console.log(data, ' datastastasagasgasgr');

//     return { data, fetchData };
// };

export {};
