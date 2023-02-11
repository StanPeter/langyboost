import MainBody from "components/layouts/MainBody/MainBody";
import LoginForm from "components/others/LoginForm/LoginForm";
import React from "react";
import { ELoginFormUsecase } from "ts/enums";

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
    return (
        <MainBody>
            <LoginForm useCase={ELoginFormUsecase.AUTH_PAGE} />
        </MainBody>
    );
};

export default AuthPage;
