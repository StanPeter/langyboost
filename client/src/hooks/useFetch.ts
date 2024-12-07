import {
    UseMutationOptions,
    UseMutationResult,
    useMutation as useMutationTanstack,
    UseQueryOptions,
    UseQueryResult,
    useQuery as useQueryTanstack,
} from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';
import apiRoutes from 'services/apiRoutes';

interface FetchOptions
    extends AxiosRequestConfig {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

const fetchApi: <TResponse>(
    url: string,
    options: FetchOptions,
) => Promise<TResponse> = async (
    url,
    options,
) => {
    const response = await axios({
        url: `${
            import.meta.env.VITE_API_URL
        }${url}`,
        method: options.method,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        data: options.data,
        params: options.params,
    });

    return response.data;
};

export const useMutation = <
    ResponseType = typeof apiRoutes[keyof typeof apiRoutes]['responseType'],
    RequestType = typeof apiRoutes[keyof typeof apiRoutes]['requestType']
>(
    apiRouteKey: keyof typeof apiRoutes,
    options?: FetchOptions,
    mutationOptions?: UseMutationOptions<
        ResponseType,
        Error,
        RequestType
    >,
): UseMutationResult<
    ResponseType,
    Error,
    RequestType
> => {
    return useMutationTanstack<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: (variables: RequestType) =>
            fetchApi<ResponseType>(apiRoutes[apiRouteKey].url, {
                ...options,
                method: apiRoutes[apiRouteKey].method,
                data: variables,
            }),
        ...mutationOptions,
    });
};

export const useQuery = <
    TResponse = typeof apiRoutes[keyof typeof apiRoutes]['responseType'],
>(
    url: string,
    options: FetchOptions,
    queryOptions?: UseQueryOptions<
        TResponse,
        Error
    >,
): UseQueryResult<TResponse, Error> => {
    return useQueryTanstack<TResponse, Error>({
        queryKey: [url, options],
        queryFn: () =>
            fetchApi<TResponse>(url, options),
        ...queryOptions,
    });
};
