import React from "react";
import navbarStyles from "../layouts/Navbar/navbar.module.scss";

interface NavbarLinkProps {
    name: string;
    expandedHelper: boolean;
    hamburgerClickHandler: () => Promise<unknown>;
    onClick: () => any;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ expandedHelper, name, hamburgerClickHandler, onClick }) => {
    return (
        <li
            onClick={async () => {
                await hamburgerClickHandler();
                onClick();
            }}
            className={`${expandedHelper ? navbarStyles.transition : ""}`}
        >
            {name}
        </li>
    );
};

export default NavbarLink;
