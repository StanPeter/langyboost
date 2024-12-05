// controllers/userController.js
import { hash } from 'bcryptjs';
import errors from 'constants/errors';
import mockData from 'db/mockData';
import { Request, Response } from 'express';
import { User } from 'generated/prisma';
import { createUser, findAllUsers, findUserByEmail, findUserByEmailOrUserName, findUserById, validatePassword } from 'services/userService';
import serverConfig from 'settings/serverConfig';
import { IErrorResponse, ISignInResponse } from 'ts/interfaces';
import { createAccessToken, createRefreshToken, sendRefreshToken } from 'utils/authUtils';
import { Validator } from 'utils/validator';

export const login = async (req: Request, res: Response): Promise<Response<ISignInResponse | IErrorResponse>> => {
    const { email, password } = req.body;

    if (serverConfig.isMocked) return res.json(mockData.signUpMockData);

    try {
        const foundUser = await findUserByEmail(email);

        if (!foundUser) {
            return res.status(400).json({ error: { message: 'Invalid email or password' } } as IErrorResponse);
        }

        const isValid = await validatePassword(password, foundUser.passwordHash);

        if (!isValid) {
            return res.status(400).json({ error: { message: 'Invalid email or password' } } as IErrorResponse);
        }

        const accessToken = createAccessToken(foundUser);

        return res.json({ user: foundUser, accessToken: accessToken });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const register = async (req: Request, res: Response): Promise<Response<ISignInResponse | IErrorResponse>> => {
    const { email, userName, password, repeatPassword } = req.body;

    // For mocked use case
    if (serverConfig.isMocked) return res.json(mockData.signUpMockData);

    try {
        // Check whether user exists
        const foundUser = await findUserByEmailOrUserName(email, userName);

        // Validation
        if (foundUser) return res.status(400).json({ error: { message: 'User already exists.' } } as IErrorResponse);
        if (password !== repeatPassword) return res.status(400).json({ error: { message: errors.PASSWORDS_DONT_MATCH } } as IErrorResponse);
        if (!Validator.isValidEmail(email)) return res.status(400).json({ error: { message: errors.INVALID_EMAIL } } as IErrorResponse);

        // Create hashed password
        const hashedPass = await hash(password, 10);

        // Create new user and handle tokens
        const newUser = await createUser(email, userName, hashedPass);

        // Create both tokens
        const accessToken = createAccessToken(newUser);
        sendRefreshToken(res, createRefreshToken(newUser));

        return res.json({ user: newUser, accessToken });
    } catch (error) {
        return res.status(500).json({ error: { message: (error as Error).message || 'Internal server error' } } as IErrorResponse);
    }
};

export const logout = async (req: Request, res: Response): Promise<Response<boolean | IErrorResponse>> => {
    // TODO: Implement
    sendRefreshToken(res, '');
    return res.json(true);
}

export const revokeRefreshTokenForUser = async (req: Request, res: Response): Promise<Response<boolean | IErrorResponse>> => {
    const {userId} = req.body;

    if (serverConfig.isMocked) return res.json(true);

    // TODO: Implement
    return res.json(true);
}

export const getUser = async (req: Request, res: Response): Promise<Response<User | IErrorResponse>> => {
    const {id} = req.params;

    if (serverConfig.isMocked) return res.json(mockData.getUserMockData);

    try {
        let foundUser: User | null = null;

        if (!id) return res.status(400).json({ error: { message: 'No user data provided.' } } as IErrorResponse);

        foundUser = await findUserById(id);

        return res.json(foundUser);
    } catch (error) {
        return res.status(500).json({ error: { message: (error as Error).message || 'Internal server error' } } as IErrorResponse);
   }
};

export const getUsers = async (req: Request, res: Response): Promise<Response<User[] | IErrorResponse>> => {
    if (serverConfig.isMocked) return res.json(mockData.getUsersMockData);

    try {
        const users = await findAllUsers();
        return res.json(users);
    } catch (error) {
        return res.status(500).json({ error: { message: (error as Error).message || 'Internal server error' } } as IErrorResponse);
   }
};
