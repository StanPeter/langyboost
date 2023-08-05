import landingPageStyles from 'components/pages/LandingPage/landingPage.module.scss';
import React from 'react';
import Particles from 'react-tsparticles';
import { particleConfig } from 'settings/particleConfig';
import { loadFull } from 'tsparticles';

interface ParticleBackgroundProps {}

const ParticleBackground: React.FC<ParticleBackgroundProps> = () => {
    const particlesInit = async (main: any) => {
        console.log(main, ' initializing');

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = async (container: any) => {
        console.log(container, ' Particle loaded')
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
            className={landingPageStyles.particles}
        />
    );
};

export default ParticleBackground;
