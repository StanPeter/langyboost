// // import { verify } from "jsonwebtoken";
// import { IContextType } from "ts/interfaces";
// import { MiddlewareFn } from "type-graphql";

// // adds bearer token header to each request
// export const addAccessTokenHeader: MiddlewareFn<IContextType> = ({}, next) => {
//     // console.log(context.req.headers, " Context headers");
//     // console.log("addAccessTokenHeader addAccessTokenHeader MIDDLEWAREREEEE");
//     // const accessToken = context.req.cookies.oad; // accessToken is stores as 'oad', for enhanced security

//     // // if access token and verify -> add header
//     // try {
//     //     verify(accessToken, process.env.ACCESS_TOKEN_SECRET!);
//     //     // if it got here, token is valid
//     //     context.req.headers["authorization"] = `Bearer ${accessToken}`;
//     // } catch (error) {
//     //     console.log((error as Error).message, " Error message");
//     // }
//     // context.req.headers;
//     // const accessToken = req.cookies.access_token;
//     // if (accessToken) {
//     //     req.headers.authorization = `Bearer ${accessToken}`;
//     // }
//     return next();
// };
