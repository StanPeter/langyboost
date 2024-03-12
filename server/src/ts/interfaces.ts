import { Request, Response } from "express";

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
