import { Request, Response } from "express";
import { User } from "generated/prisma";

/**
 * Api interfaces
 */
export interface IContextType {
    req: Request;
    res: Response;
    payload: string | object;
}

export interface IAccessTokenPayload {
    userId: string;
    iat: number;
    exp: number;
}

export interface IRefreshTokenPayload {
    userId: string;
    tokenVersion: number;
    iat: number;
    exp: number;
}

export interface ISignInResponse {
    user: User;
    accessToken: string;
}

export interface IErrorResponse {
    error: {
        message: string;
    };
}

