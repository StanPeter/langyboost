/* eslint-disable @typescript-eslint/no-explicit-any */
import _axios, { AxiosResponse } from "axios";
import { AnyAction, Dispatch } from "redux";
import { Params, ParamsAny } from "ts/interfaces";
// import { toggleDialog } from 'store/dialogsSlice';
// import { v4 as uuidv4 } from 'uuid';

interface Props {
    url: string;
    method: "get" | "post" | "patch";
    headers?: Params;
    data?: ParamsAny;
    params?: ParamsAny;
    shouldCache?: boolean;
    dispatch: Dispatch<AnyAction>;
}

const getDefaultHeaders = () => ({
    // 'Envelope-IdInApplication': uuidv4(),
    // 'Envelope-CorrelationId': uuidv4(),
    "Envelope-Application": "CFE"
});

const MOCK_DATA = {
    okResponse: {
        data: "it went ok",
        status: 200
    },
    businessError: {
        data: { error: { message: "Testing business 200 error" } },
        status: 200
    },
    internalError: {
        data: { errorMessage: "Testing internal 500 error" },
        status: 500
    }
};

const cache: Cache = {};

const sleep = (cb: () => any, time = 1000) => {
    return new Promise(res => {
        setTimeout(() => {
            res(cb());
        }, time);
    });
};

type Cache = { [url: string]: ParamsAny };

interface IResponse {
    body: any;
    error?: string;
}

// to be used anywhere
export const fetchApi = async ({
    method,
    url,
    data = {},
    headers = {},
    params = {},
    shouldCache = true,
    dispatch
}: Props): Promise<IResponse> => {
    if (shouldCache && cache[url + JSON.stringify(params) + JSON.stringify(data)])
        return { body: cache[url + JSON.stringify(params) + JSON.stringify(data)] };

    const axios = _axios.create();

    let response: AxiosResponse;

    // just to test where is the CORS problem
    // testApis(method, url, params, headers, body);
    try {
        if (url === "test") {
            // @ts-ignore
            response = await sleep(() => MOCK_DATA.okResponse, 1000);
        } else {
            response = await axios({
                url: url,
                method: method,
                baseURL: process.env.REACT_APP_BASE_API_URL,
                params: params,
                headers: {
                    ...getDefaultHeaders(),
                    ...headers
                },
                data: data
            });
        }

        // handle fetching request data for 2** response
        if (response.status.toString()[0] === "2") {
            // Error handling for Business error
            if (response.data.error) {
                // dispatch(
                //     toggleDialog({
                //         dialogData: {
                //             headerMessage: response.data.error.message,
                //             type: 'business'
                //         },
                //         dialogName: 'errorDialog',
                //         dialogState: true
                //     })
                // );

                return { error: response.data.error.message, body: null };
            }

            // caching the output
            if (shouldCache) cache[url + JSON.stringify(params) + JSON.stringify(data)] = response.data;

            return { body: response.data };
        }

        alert("Unhandled exeption");
        return { body: null, error: "Unhandled exeption" };
        // Error handling for Axios errors 404 and Internal errors 500
    } catch (e) {
        console.log(e, " response CATCH");
        const errorMessage: string = (e as any).response?.data?.errorMessage || "";

        // dispatch(
        //     toggleDialog({
        //         dialogData: {
        //             errorMessage: errorMessage,
        //             // headerMessage: (e as AxiosError).message
        //             headerMessage: 'Oops, something went wrong. Please try again later.'
        //         },
        //         dialogName: 'errorDialog',
        //         dialogState: true
        //     })
        // );

        console.log(errorMessage, " errorMessage");
        return { body: null, error: (e as any).message };
    }
};
