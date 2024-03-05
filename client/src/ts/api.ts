export interface ISingUpResponse {
    data: {
        addUser: {
            accessToken: string;
            user: {
                email: string;
                id: number;
                accessToken: string;
            };
        };
    };
}

export interface ISingInResponse {
    data: {
        loginUser: {
            accessToken: string;
            user: {
                email: string;
                id: number;
                accessToken: string;
            };
        };
    };
}
