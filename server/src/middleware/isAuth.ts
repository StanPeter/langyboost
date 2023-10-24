// import { ApolloError } from 'apollo-server-errors';
// import { User } from 'schema/User';
// import { JsonWebTokenError, TokenExpiredError, decode, verify } from 'jsonwebtoken';
// import { IAccessTokenPayload, IContextType, IRefreshTokenPayload } from 'ts/interfaces';
// import { MiddlewareFn } from 'type-graphql';
// // import {
// // 	ACCESS_TOKEN_EXPIRATION_LIMIT,
// // 	REFRESH_TOKEN_EXPIRATION_LIMIT,
// // 	createAccessToken,
// // 	createRefreshToken,
// // 	sendAccessToken,
// // 	sendRefreshToken,
// // } from 'utils/auth';

// // check the expiration and extent its life span
// // const checkExpiration = (token: string, tokenType: 'access' | 'refresh', context: IContextType, foundUser: User) => {
// // 	if (!token) {
// // 		console.log('No token passed inside of check expiration');
// // 		return;
// // 	}

// // 	const decoded = decode(token) as IAccessTokenPayload;
// // 	const currentTime = Date.now() / 1000;
// // 	const timeDiff = decoded.exp - currentTime;

// // 	if (tokenType === 'access' && timeDiff < ACCESS_TOKEN_EXPIRATION_LIMIT) {
// // 		console.log('creating new access token through EXPIRATION ');
// // 		sendAccessToken(context.res, createRefreshToken(foundUser));
// // 	} else if (tokenType === 'refresh' && timeDiff < REFRESH_TOKEN_EXPIRATION_LIMIT) {
// // 		console.log('creating new refresh token through EXPIRATION ');
// // 		sendRefreshToken(context.res, createRefreshToken(foundUser));
// // 	}
// // };

// // verify accessToken part, returns true when there is need to call next()
// const verifyAccessToken = async (accessToken: string, context: IContextType) => {
// 	return true;
// 	// try {
// 	// 	console.log('VERIFYING ACCESS TOKEN');

// 	// 	const payload = verify(accessToken, process.env.ACCESS_TOKEN_SECRET!) as IAccessTokenPayload;

// 	// 	console.log(payload, ' PAYLOAD VERIFIED');

// 	// 	const foundUser = await User.findOne({ id: payload.userId });

// 	// 	console.log(foundUser?.id, ' USER FOUND ID');

// 	// 	// end the code with invalid token error
// 	// 	if (!foundUser) {
// 	// 		console.log('User for the token was not found');
// 	// 		return;
// 	// 	}

// 	// 	checkExpiration(accessToken, 'access', context, foundUser);
// 	// 	// if the user was found and access token verified, we can skip to the next()
// 	// 	return true;
// 	// } catch (error) {
// 	// 	if (error instanceof TokenExpiredError) {
// 	// 		console.log('Access token has expired or missing but we will try your refresh token');
// 	// 		// return checkIfRefreshTokenValid(refreshToken, context, next);
// 	// 	} else if (error instanceof JsonWebTokenError) {
// 	// 		console.log('Access token was missing');
// 	// 	} else {
// 	// 		console.log(error, 'Unfortunately, there was an error!!!');
// 	// 		// throw new ApolloError("User's token is not valid and no refresh token provided");
// 	// 	}
// 	// }

// 	// return false;
// };

// // verify refreshToken part
// const verifyRefreshToken = async (refreshToken: string, context: IContextType) => {
// 	return true;
// 	// try {
// 	//     console.log("VERIFYING REFRESH TOKEN");

// 	//     const payload = verify(
// 	//         refreshToken,
// 	//         process.env.REFRESH_TOKEN_SECRET!
// 	//     ) as IRefreshTokenPayload;
// 	//     const foundUser = await User.findOne({ id: payload.userId });

// 	//     console.log(foundUser?.id, "FOUND USER ID");

// 	//     if (!foundUser) throw new ApolloError("No user was found for refresh token");

// 	//     // create new access token and extend the lifespan of the refresh token

// 	//     console.log("creating new access token");
// 	//     sendAccessToken(context.res, createAccessToken(foundUser));
// 	//     checkExpiration(refreshToken, "refresh", context, foundUser);
// 	//     // sendRefreshToken(context.res, createRefreshToken(foundUser));
// 	// } catch (error) {
// 	//     throw new ApolloError("User's token entirely invalid even refresh token");
// 	// }
// };

// // auntenticate our access token, if invalid check for refresh token, if both invalid -> deny access, else -> grant access
// export const isAuth: MiddlewareFn<IContextType> = async ({ context }, next) => {
// 	return next();

// 	// get tokens from our saved cookies
// 	const refreshToken = context.req.cookies.jid;
// 	const accessToken = context.req.cookies.oad;

// 	if (!refreshToken && !accessToken) throw new ApolloError('User is not authenticated: no token passed inside');

// 	const shouldCallNext = await verifyAccessToken(accessToken, context);

// 	if (shouldCallNext) return next();

// 	await verifyRefreshToken(refreshToken, context);

// 	console.log('CALLING NEXT');

// 	return next();
// };
