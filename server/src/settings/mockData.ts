// USER mock data
const testUserData = {
    id: 155,
    email: "test@gmail.com",
    username: "test",
    firstName: "Tes",
    lastName: "Dvor",
    receivePromo: true,
    password: "test",
    tokenVersion: 1,
};

const signUpMockData = true;
const signInMockData = testUserData;
const getUserMockData = testUserData;

export default {
    signUpMockData: signUpMockData,
    signInMockData: signInMockData,
    getUserMockData: getUserMockData,
};
