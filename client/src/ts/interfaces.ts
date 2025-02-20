import React from 'react';

export interface SectionStyles {
    membership: React.CSSProperties;
    subscription: React.CSSProperties;
    paymendMethod: React.CSSProperties;
    paymentDetails: React.CSSProperties;
}

//UI
export interface Course {
    imgSrc: string;
    value: string;
    cardIndex: number;
    name: string;
    text: string;
}
export interface MultiselectItem {
    imgSrc?: string;
    value: string;
    cardIndex?: number;
    name: string;
    text?: string;
}

// used for unknown key pairs
export interface Params {
    [key: string]: string;
}

// used for unknown key pairs combining any types
export interface ParamsAny {
    [key: string]: any;
}

// BACKEND
// TODO: clean up interfaces

import { User } from '@prisma/client';
import { Request, Response } from 'express';

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
