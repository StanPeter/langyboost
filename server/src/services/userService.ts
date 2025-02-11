// services/userService.js
import { compare } from "bcryptjs";
import { User } from "models/User";

export const findUserByEmail = async (email: string) => {
  return await User.findUnique({ where: { email: email } });
};

export const findUserByEmailOrUserName = async (
  email: string,
  userName: string
) => {
  return await User.findFirst({
    where: { OR: [{ email: email }, { userName: userName }] },
  });
};

export const findAllUsers = async () => {
  return await User.findMany();
};

export const findUserById = async (id: string) => {
  return await User.findUnique({ where: { id: id } });
};

export const createUser = async (
  email: string,
  userName: string,
  passwordHash: string
) => {
  return await User.create({ data: { email, userName, passwordHash } });
};

export const validatePassword = async (
  password: string,
  passwordHash: string
) => {
  return await compare(password, passwordHash);
};

// export const registerUser = async (
//   email: string,
//   userName: string,
//   password: string,
//   repeatPassword: string
// ) => {
//   if (serverConfig.isMocked) return mockData.signUpMockData;

//   const foundUser = await findUserByEmailOrUserName(email, userName);

//   if (foundUser) throw new Error("User already exists.");
//   if (password !== repeatPassword) throw new Error(errors.PASSWORDS_DONT_MATCH);
//   if (!Validator.isValidEmail(email)) throw new Error(errors.INVALID_EMAIL);

//   const hashedPass = await hash(password, 10);
//   const newUser = await createUser(email, userName, hashedPass);

//   // Create both tokens
//   const accessToken = createAccessToken(newUser);
//   const refreshToken = createRefreshToken(newUser);

//   return { user: newUser, accessToken, refreshToken };
// };

// export const loginUser = async (email: string, password: string) => {
//   const foundUser = await findUserByEmail(email);

//   if (!foundUser) throw new Error("Invalid email or password");
//   const isValid = await validatePassword(password, foundUser.passwordHash);

//   if (!isValid) throw new Error("Invalid email or password");

//   const accessToken = createAccessToken(foundUser);
//   return { user: foundUser, accessToken };
// };
