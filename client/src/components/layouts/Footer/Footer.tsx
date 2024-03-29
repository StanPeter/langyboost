import Link from 'components/UI/Link';
import Paragraph from 'components/UI/Paragraph';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>
            <ul className={`${styles.socialNetwork} ${styles.socialCircle}`}>
                <Link hyperlinkClasses={`${styles.rotateCenterHover} ${styles.icoLinkedin}`}>
                    <i className="">
                        <FaLinkedinIn />
                    </i>
                </Link>
                <Link hyperlinkClasses={`${styles.rotateCenterHover} ${styles.icoTwitter}`}>
                    <i className="">
                        <FaTwitter />
                    </i>
                </Link>
                <Link hyperlinkClasses={`${styles.rotateCenterHover} ${styles.icoGithub}`}>
                    <i className="">
                        <FaGithub />
                    </i>
                </Link>
                <Link hyperlinkClasses={`${styles.rotateCenterHover} ${styles.icoFacebook}`}>
                    <i className="">
                        <FaFacebookF />
                    </i>
                </Link>
                <Link hyperlinkClasses={`${styles.rotateCenterHover} ${styles.icoInstagram}`}>
                    <i className="">
                        <FaInstagram />
                    </i>
                </Link>
            </ul>
            <div className={styles.copyright}>
                <Paragraph text="COPYRIGHT" />
                <a onClick={() => navigate('/termsConditions')} href="">
                    {new Date().getFullYear().toString()}
                </a>
                <Paragraph text="ALL_RIGHTS_RESERVED" />
            </div>
        </footer>
    );
};

export default Footer;
