import React from "react";
import LoginForm from "components/others/LoginForm/LoginForm";
import MainBody from "components/layouts/MainBody/MainBody";

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
    return (
        <MainBody>
            <LoginForm useCase="authPage" />
        </MainBody>
    );
};

export default AuthPage;
