import React from "react";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { useHistory } from "react-router";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const history = useHistory();

    if (history.location.pathname === "/") return null;

    return (
        <footer className="footer">
            <ul className="social-network social-circle">
                <li>
                    <a
                        href="/"
                        className="icoLinkedin rotate-center"
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
                        className="icoTwitter rotate-center"
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
                        className="icoGithub rotate-center"
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
                        className="icoFacebook rotate-center"
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
                        className="icoInstagram rotate-center"
                        title="Instagram"
                    >
                        <i className="">
                            <FaInstagram />
                        </i>
                    </a>
                </li>
            </ul>
            <p className="copyright">
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