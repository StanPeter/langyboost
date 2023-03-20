export interface ISingUpResponse {
    data: {
        signUp: {
            accessToken: string;
            user: {
                email: string;
                id: number;
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
                id: number;
            };
        };
    };
}
