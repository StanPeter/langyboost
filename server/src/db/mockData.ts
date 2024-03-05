import { User } from 'generated/prisma';

// USER mock data
export const TEST_USER_DATA: User = {
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
};

const signUpMockData = TEST_USER_DATA;

export default {
	signUpMockData: { ...signUpMockData, accessToken: 'accessTokenMOCK' },
};
