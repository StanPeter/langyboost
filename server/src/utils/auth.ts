import { User } from "entity/User";
import { sign } from "jsonwebtoken";

export const createAccessToken = (user: User) => {
    if (!process.env.ACCESS_TOKEN_SECRET)
        throw new Error("No acces token declared inside .env file!");

    return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30m",
    });
};

export const createRefreshToken = (user: User) => {
    if (!process.env.REFRESH_TOKEN_SECRET)
        throw new Error("No refresh token declared inside .env file!");

    return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "1d",
    });
};
