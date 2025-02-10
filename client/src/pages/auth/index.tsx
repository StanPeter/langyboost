import MainBody from 'components/layouts/MainBody';
import LoginForm from 'components/others/LoginForm/LoginForm';
import React from 'react';

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
    return (
        <MainBody>
            <LoginForm useCase={'authPage'} />
        </MainBody>
    );
};

export default AuthPage;
