import { Role } from "generated/prisma";
import { ISignInResponse } from "ts/interfaces";

// USER mock data
export const TEST_USER_DATA = {
	id: '5f9a56b01e5b5f4f231e64c3',
	userName: 'test user',
	email: 'test@gmail.com',
	firstName: 'Tes',
	lastName: 'Dvor',
	receivePromo: true,
	passwordHash: 'testHask',
	tokenVersion: 1,
	address: 'addres',
	avatar: 'https://play-lh.googleusercontent.com/1UFr0tlT1ejZUxp3tiqepEbwmYCqW-0KFYkwM8XWN2-I1grk5wPuVUdqbu503YCoXisqYIZXwTdg69Z0m4A',
	birthday: '25.02.1999',
	membershipExpiration: 'unknown',
	membershipType: 'ADMIN' as Role,
	nationality: 'GE',
	phoneNumber: '7184 8788',
	// accessToken: 'accessTokenMOCK',
};

const signUpMockData: ISignInResponse = { user: TEST_USER_DATA, accessToken: 'mockAccessToken' };

export default {
	signUpMockData: signUpMockData,
};
