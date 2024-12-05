/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface User {
  /**
   * @format uuid
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  id?: string;
  /** @example "user@example.com" */
  email?: string;
  /** @example "John" */
  firstName?: string;
  /** @example "Doe" */
  lastName?: string;
  /** @example "johndoe" */
  userName?: string;
  /** @example false */
  receivePromo?: boolean;
  /** @example "hashedpassword" */
  passwordHash?: string;
  /** @example 0 */
  tokenVersion?: number;
  /** @example "1990-01-01" */
  birthday?: string;
  /** @example "+1234567890" */
  phoneNumber?: string;
  /** @example "123 Main St" */
  address?: string;
  /** @example "American" */
  nationality?: string;
  /** @example "2024-01-01" */
  membershipExpiration?: string;
  /** @example "MEMBER" */
  membershipType?: "MEMBER" | "PREMIUM" | "ADMIN";
  /** @example "avatar.png" */
  avatar?: string;
}

export interface CommonError {
  error?: {
    /** @example "Invalid email or password" */
    message?: string;
  };
}

export interface LoginRequest {
  /** @example "user@example.com" */
  email?: string;
  /** @example "password123" */
  password?: string;
}

export interface LoginResponse {
  user?: User;
  accessToken?: string;
}

export interface RegisterRequest {
  /** @example "user@example.com" */
  email?: string;
  /** @example "johndoe" */
  userName?: string;
  /** @example "password123" */
  password?: string;
  /** @example "password123" */
  repeatPassword?: string;
}

export interface RegisterResponse {
  user?: User;
  accessToken?: string;
}

/** @example true */
export type LogoutResponse = boolean;

export type GetUserResponse = User;

export type GetAllUsersResponse = User[];

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Your API Title
 * @version 1.0.0
 *
 * Your API Description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Authenticate a user with email and password.
     *
     * @tags User
     * @name UsersLoginCreate
     * @summary User login
     * @request POST:/api/users/login
     */
    usersLoginCreate: (data: LoginRequest, params: RequestParams = {}) =>
      this.request<LoginResponse, CommonError>({
        path: `/api/users/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Register a new user with email, username, and password.
     *
     * @tags User
     * @name UsersRegisterCreate
     * @summary User registration
     * @request POST:/api/users/register
     */
    usersRegisterCreate: (data: RegisterRequest, params: RequestParams = {}) =>
      this.request<RegisterResponse, CommonError>({
        path: `/api/users/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Log out the user and clear the refresh token.
     *
     * @tags User
     * @name UsersLogoutCreate
     * @summary User logout
     * @request POST:/api/users/logout
     */
    usersLogoutCreate: (params: RequestParams = {}) =>
      this.request<LogoutResponse, CommonError>({
        path: `/api/users/logout`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a user by their ID.
     *
     * @tags User
     * @name UsersDetail
     * @summary Get user by ID
     * @request GET:/api/users/{id}
     */
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetUserResponse, CommonError>({
        path: `/api/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a list of all users.
     *
     * @tags User
     * @name UsersList
     * @summary Get all users
     * @request GET:/api/users
     */
    usersList: (params: RequestParams = {}) =>
      this.request<GetAllUsersResponse, CommonError>({
        path: `/api/users`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
