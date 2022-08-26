import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router";
import styles from "./footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>
            <ul className={`${styles.socialNetwork} ${styles.socialCircle}`}>
                <li>
                    <a
                        href="/"
                        className={`${styles.rotateCenterHover} ${styles.icoLinkedin}`}
                        title="Linkedin"
                    >
                        <i className="">
                            <FaLinkedinIn />
                        </i>
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        className={`${styles.rotateCenterHover} ${styles.icoTwitter}`}
                        title="Twitter"
                    >
                        <i className="">
                            <FaTwitter />
                        </i>
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        className={`${styles.rotateCenterHover} ${styles.icoGithub}`}
                        title="Github"
                    >
                        <i className="">
                            <FaGithub />
                        </i>
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        className={`${styles.rotateCenterHover} ${styles.icoFacebook}`}
                        title="Facebook"
                    >
                        <i className="">
                            <FaFacebookF />
                        </i>
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        className={`${styles.rotateCenterHover} ${styles.icoInstagram}`}
                        title="Instagram"
                    >
                        <i className="">
                            <FaInstagram />
                        </i>
                    </a>
                </li>
            </ul>
            <p className={styles.copyright}>
                <span onClick={() => navigate("/termsConditions")}>Copyright</span> 1999-2021 by
                Refsnes Data. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
