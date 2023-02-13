import Link from "components/UI/Link";
import Paragraph from "components/UI/Paragraph";
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
                <Link>
                    <a href="/" className={`${styles.rotateCenterHover} ${styles.icoLinkedin}`} title="Linkedin">
                        <i className="">
                            <FaLinkedinIn />
                        </i>
                    </a>
                </Link>
                <Link>
                    <a href="/" className={`${styles.rotateCenterHover} ${styles.icoTwitter}`} title="Twitter">
                        <i className="">
                            <FaTwitter />
                        </i>
                    </a>
                </Link>
                <Link>
                    <a href="/" className={`${styles.rotateCenterHover} ${styles.icoGithub}`} title="Github">
                        <i className="">
                            <FaGithub />
                        </i>
                    </a>
                </Link>
                <Link>
                    <a href="/" className={`${styles.rotateCenterHover} ${styles.icoFacebook}`} title="Facebook">
                        <i className="">
                            <FaFacebookF />
                        </i>
                    </a>
                </Link>
                <Link>
                    <a href="/" className={`${styles.rotateCenterHover} ${styles.icoInstagram}`} title="Instagram">
                        <i className="">
                            <FaInstagram />
                        </i>
                    </a>
                </Link>
            </ul>
            <div className={styles.copyright}>
                <Paragraph text="COPYRIGHT" />
                <a onClick={() => navigate("/termsConditions")} href="">
                    {new Date().getFullYear().toString()}
                </a>
                <Paragraph text="ALL_RIGHTS_RESERVED" />
            </div>
        </footer>
    );
};

export default Footer;
