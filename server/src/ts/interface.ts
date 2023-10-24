import { Request, Response } from "express";

export interface IContextType {
    req: Request;
    res: Response;
    payload: string | object;
}

export interface IAccessTokenPayload {
    userId: number;
    iat: number;
    exp: number;
}

export interface IRefreshTokenPayload {
    userId: number;
    tokenVersion: number;
    iat: number;
    exp: number;
}
