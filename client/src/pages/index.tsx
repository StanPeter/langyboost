import LoginForm from 'components/others/LoginForm/LoginForm';
import ParticleBackground from 'components/others/ParticleBackground/ParticleBackground';
import React from 'react';

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
        <div className="relative h-screen w-full flex items-center justify-center">
            <ParticleBackground />
            <div className="absolute inset-0 opacity-45"></div>
            <div className="relative z-10 w-[800px]">
                <LoginForm useCase="landingPage" />
            </div>
        </div>



    );
};

export default LandingPage;
