import NextImage from 'next/image';
import React from 'react';

interface IImage {
    alt: string;
    classes?: string;
    onClick?: () => void;
    src: string;
}

// custom header due to text translation
const Image: React.FC<IImage> = ({ alt, classes, onClick, src }) => {
    return <NextImage className={`${classes}`} alt={alt} onClick={onClick} src={src} />;
};

export default Image;
