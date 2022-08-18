import React from "react";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { useHistory } from "react-router";
import styles from './footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const history = useHistory();

    if (history.location.pathname === "/") return null;

    return (
        <footer className={styles.footer}>
            <ul className={`${styles.socialNetwork} ${styles.socialCircle}`}>
                <li>
                    <a
                        href="/"
                        className={`${styles.rotateCenter} ${styles.icoLinkedin}`}
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
                        className={`${styles.rotateCenter} ${styles.icoTwitter}`}
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
                        className={`${styles.rotateCenter} ${styles.icoGithub}`}
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
                        className={`${styles.rotateCenter} ${styles.icoFacebook}`}
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
                        className={`${styles.rotateCenter} ${styles.icoInstagram}`}
                        title="Instagram"
                    >
                        <i className="">
                            <FaInstagram />
                        </i>
                    </a>
                </li>
            </ul>
            <p className={styles.copyright}>
                <span
                    className="link"
                    onClick={() => history.push("/termsConditions")}
                >
                    Copyright
                </span>{" "}
                1999-2021 by Refsnes Data. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
