export interface ISingUpResponse {
    data: {
        signUp: {
            accessToken: string;
            user: {
                email: string;
            };
        };
    };
}

export interface ISingInResponse {
    data: {
        signIn: {
            accessToken: string;
            user: {
                email: string;
            };
        };
    };
}
