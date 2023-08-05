import axios, { AxiosResponse } from 'axios';
// import apiPaths from 'settings/apiPaths';

interface ILogin {
    token: string;
}

// NOT IMPLEMENTED
/* Post method to call login request, will return a string TOKEN */
const loginApi = async (username: string, password: string, lang: string) => {
    const resp: AxiosResponse<ILogin> = await axios({
        method: 'POST',
        url: 'apiPaths.LOGIN',
        data: {
            username,
            password,
            lang
        }
    });
    return resp.data.token;
};

export default loginApi;
