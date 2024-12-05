import {
    useMutation,
    UseMutationOptions,
    useQuery,
    UseQueryOptions,
} from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';

interface FetchOptions
    extends AxiosRequestConfig {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

const fetchApi: <TResponse, TRequest = void>(
    url: string,
    options: FetchOptions,
) => Promise<TResponse> = async (
    url,
    options,
) => {
    const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/${url}`,
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

export const useApiRequest = <
    TResponse,
    TRequest = void,
>(
    url: string,
    options: FetchOptions,
    queryOptions?: UseQueryOptions<
        TResponse,
        Error
    >,
    mutationOptions?: UseMutationOptions<
        TResponse,
        Error,
        TRequest
    >,
) => {
    if (options.method === 'GET') {
        return useQuery({
            queryKey: [url, options],
            queryFn: () =>
                fetchApi<TResponse>(url, options),
            ...queryOptions,
        });
    } else {
        return useMutation({
            mutationFn: (variables: TRequest) =>
                fetchApi<TResponse, TRequest>(
                    url,
                    {
                        ...options,
                        data: variables,
                    },
                ),
            ...mutationOptions,
        });
    }
};
