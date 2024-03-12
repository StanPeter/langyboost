import { Response } from 'express';
import { User } from 'generated/prisma';
import { sign } from 'jsonwebtoken';

// if a request is sent and the tokens lifetime is < commented time, create a new one
export const ACCESS_TOKEN_EXPIRATION_LIMIT = 10 * 60; // 10m
export const REFRESH_TOKEN_EXPIRATION_LIMIT = 60 * 24 * 60; // 24h

export const createAccessToken = (user: User) => {
	// pass secret to create a token and secure it
	if (!process.env.ACCESS_TOKEN_SECRET) throw new Error('No access token secret declared inside .env file!');

	return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '30m',
	});
};

// we want to return a bit different secret code than accessToken, httpOnly secures
export const createRefreshToken = (user: User) => {
	if (!process.env.REFRESH_TOKEN_SECRET) throw new Error('No refresh token secret declared inside .env file!');

	return sign({ userId: user.id, tokenVersion: user.tokenVersion }, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: '2d',
	});
};

// set refreshing token -> name, token, opts
export const sendRefreshToken = (res: Response, token: string) => {
	// secure flag -> Ensures data transmission only over encrypted channels
	// httpOnly -> Restricts client-side access
	res.cookie('jid', token, { httpOnly: true, path: '/refreshToken', secure: true });
	// res.cookie('jid', token, { httpOnly: true });
};
