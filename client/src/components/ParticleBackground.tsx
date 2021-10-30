import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import { particleConfig } from "config/particleConfig";

interface ParticleBackgroundProps {}

const ParticleBackground: React.FC<ParticleBackgroundProps> = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        //for some reason needs to get reloaded -> which can be done by changing class e.g.
        setTimeout(() => {
            setName(" ");
        }, 1000);
    });

    // const param = {
    //     particles: {
    //         shape: {
    //             type: "images",
    //             image: [
    //                 {
    //                     src: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    //                     height: 20,
    //                     width: 20,
    //                 },
    //                 {
    //                     src: "https://www.imagetheatre.cz/wp-content/uploads/bestofimage43.jpg",
    //                     height: 20,
    //                     width: 20,
    //                 },
    //             ],
    //         },
    //     },
    // };

    return (
        <Particles
            className="particles"
            //@ts-ignore
            canvasClassName={name}
            //@ts-ignore
            params={particleConfig}
        />
    );
};

export default ParticleBackground;
