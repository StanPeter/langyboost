import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from 'components/layouts/Footer';
import Navbar from 'components/layouts/Navbar';
import React from 'react';

const StyledBoxWrapper = styled(Box)`
    position: relative;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensures viewport height */

    &::after {
        content: '';
        background-image: url('../../../assets/images/bgPicture.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.6;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: fixed;
        z-index: -1;
    }
`;

const BodyWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;

    padding: 10% 0.5rem;

    @media screen and (min-width: 750px) {
        width: 85%;
        padding: 6% 0 20%;
    }

    @media screen and (min-width: 1200px) {
        width: 70%;
    }

    @media screen and (min-width: 1500px) {
        width: 60%;
        max-width: 1200px;
    }
`;

interface MainBodyProps {
    children: React.ReactNode;
}

const MainBody: React.FC<MainBodyProps> = ({ children }) => {
    return (
        <StyledBoxWrapper>
            <Navbar />
            <BodyWrapper>{children}</BodyWrapper>
            <Footer />
        </StyledBoxWrapper>
    );
};

export default MainBody;
