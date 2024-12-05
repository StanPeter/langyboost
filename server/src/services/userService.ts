// services/userService.js
import { compare } from 'bcryptjs';
import { User } from '../models/userModel.js';

export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

export const validatePassword = async (password, passwordHash) => {
    return await compare(password, passwordHash);
};