// services/userService.js
import { compare } from 'bcryptjs';
import { User } from 'models/User';

export const findUserByEmail = async (email: string) => {
    return await User.findUnique({ where: {email: email} });
};

export const findUserByEmailOrUserName = async (email: string, userName: string) => {
    return await User.findFirst({ where: { OR: [{email: email}, {userName: userName}] } });
}

export const createUser = async (email: string, userName: string, passwordHash: string) => {
    return await User.create({ data: { email, userName, passwordHash } });
}

export const validatePassword = async (password: string, passwordHash: string) => {
    return await compare(password, passwordHash);
};