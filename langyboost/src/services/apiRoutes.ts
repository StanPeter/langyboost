import { LoginRequest, LoginResponse } from 'generated/api';
import { AnyAction, Dispatch } from 'redux';

// const DEFAULT_VALUES = {
//     pageSize: 50
// };

interface IOptions {
    mocked?: boolean;
    shouldCache?: boolean;
}

interface ISearchVatNumber extends IOptions {
    xx?: string;
}

enum Method {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

export default {
    usersLogin: {
        method: Method.POST,
        url: 'users/login',
        requestType: {} as LoginRequest,
        responseType: {} as LoginResponse,
    },
}

// GET /clients/vat response
export const getAvailableCourses = async (dispatch: Dispatch<AnyAction>, { xx, mocked }: ISearchVatNumber) => {
    // if (mocked || settings.isMocked) {
    //     const mockData = MOCK.getAvailableCoursesMockData;

    //     console.log("MOCK DATA!");
    //     return { body: mockData };
    // }

    // if (!clientId && !vatRegistrationNumber) return { data: [] };

    // const data = await fetchApi({
    //     url: "card-account/clients/vat",
    //     method: "get",
    //     params: { clientId, vatRegistrationNumber, maxRows },
    //     dispatch: dispatch
    // });

    console.log(xx);

    return '';
    // return { data: data.body?.foundVATnumbers as Params[], error: data.error };
};
