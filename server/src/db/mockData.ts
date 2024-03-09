import { LoginResponse, UserSchema } from 'schema/User';

// USER mock data
export const TEST_USER_DATA: UserSchema = {
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
	membershipType: 'ADMIN',
	nationality: 'GE',
	phoneNumber: '7184 8788',
	accessToken: 'accessTokenMOCK',
};

const signUpMockData = { user: TEST_USER_DATA, accessToken: 'mockAccessToken' } as LoginResponse;

export default {
	signUpMockData: signUpMockData,
};
