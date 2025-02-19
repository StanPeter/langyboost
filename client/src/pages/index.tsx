import { Box, styled } from '@mui/material';
import LoginForm from 'components/pages/auth/LoginForm';
import ParticleBackground from 'components/pages/home/ParticleBackground';
import React from 'react';

const StyledWrapper = styled(Box)({
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const StyledFormWrapper = styled(Box)({
    position: 'relative',
    zIndex: 10,
    width: '800px',
});

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
    // useEffect(() => {
    //     console.log("effected");

    //     setTimeout(() => {
    //         // setPassword("");
    //         // setEmail("");
    //         // setUsername("");
    //     }, 1000);
    // }, []);

    // console.log('rerendering LANDING');

    return (
        <StyledWrapper>
            <ParticleBackground />
            <StyledFormWrapper>
                <LoginForm useCase="landingPage" />
            </StyledFormWrapper>
        </StyledWrapper>
    );
};

export default LandingPage;
