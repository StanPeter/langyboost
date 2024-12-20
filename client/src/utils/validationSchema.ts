import * as yup from 'yup';
import { passwordExp } from '../constants/regExp';

/* contains vaidation using 'yup' library for the entire app */

// regex constants
// const STRING_REG = /^[a-zA-Z0-9\s]*$/;
// const NUMBER_POSITIVE_REG = /^[0-9]*$/;
// const NUMBER_POSITIVE_DEC_REG = /^[0-9]+(?:\.[0-9]{1,2})?$|^[0-9]*$/;

// messages in case validation fires off -> might move to another folder later on
const V = {
    required: 'The input field is required',
    noMatchPassword: "Passwords donn't match",
    notEmail: 'The input must be an email',
    passwordRegExp: 'The password must at least 8 characters long containing a lower case, an upper case and a number',
};

// schema for sing up login form
export const SING_UP_SCHEMA = yup.object().shape({
    username: yup.string().required(V.required),
    password: yup.string().required(V.required).matches(passwordExp),
    confirmPassword: yup.string().oneOf([yup.ref('password')], V.noMatchPassword),
    email: yup.string().email(V.notEmail).required(V.required),
});

// schema for sing in register form
export const SING_IN_SCHEMA = yup.object().shape({
    email: yup.string().email(V.notEmail).required(V.required),
    password: yup.string().required(V.required).matches(passwordExp, { message: V.passwordRegExp }),
});
