// controllers/userController.js
import { Request, Response } from 'express';

// export const signIn = async (req: Request, res: Response) => {
//     const { email, password } = req.body;

//     try {
//         const foundUser = await findUserByEmail(email);

//         if (!foundUser) {
//             return res.status(400).json({ error: 'Invalid email or password' });
//         }

//         const isValid = await validatePassword(password, foundUser.passwordHash);

//         if (!isValid) {
//             return res.status(400).json({ error: 'Invalid email or password' });
//         }

//         const accessToken = createAccessToken(foundUser);

//         return res.json({ message: 'Sign-in successful', accessToken });
//     } catch (error) {
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// };

export const testEndpoint = async (req: Request, res: Response) => {
    try {
        // Add any logic you need here
        return res.json({ message: 'Test endpoint reached successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};