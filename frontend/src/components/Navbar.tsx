import React, { useState } from "react";
import { useHistory } from "react-router";
import { useGetUserQuery, useLogoutMutation } from "generated/graphql";
import { setAccessToken } from "utils/getToken";

interface NavbarProps {}

const toggler = (links: NodeListOf<Element>, nameOfClass: string) => {
    links.forEach((link) => {
        link.classList.toggle(nameOfClass);
    });
};

const Navbar: React.FC<NavbarProps> = ({}) => {
    const history = useHistory();

    const [navExpanded, setNavExpanded] = useState(false);
    const { data, loading } = useGetUserQuery();
    const [logout, { client }] = useLogoutMutation();

    const hamburgerClickHandler = () => {
        const navLinks = document.querySelector(".navbar-links")!;
        const links = document.querySelectorAll(".navbar-links li");

        if (!navExpanded) {
            setNavExpanded(true);
            toggler(links, "nav-link-transition");

            setTimeout(() => {
                toggler(links, "nav-link-transition");
            }, 1000);
        } else {
            toggler(links, "nav-link-transition");

            setTimeout(() => {
                setNavExpanded(false);
                toggler(links, "nav-link-transition");
            }, 1000);
        }

        navLinks.classList.toggle("open");
        toggler(links, "fade");
    };

    const authButtons = (hide: boolean) => {
        if (data?.getUser)
            return (
                <li
                    className={hide ? "hideNav" : ""}
                    onClick={async () => {
                        await logout();
                        setAccessToken("");
                        await client.resetStore();
                    }}
                >
                    Logout
                </li>
            );
        else if (!data?.getUser && !loading)
            return (
                <li
                    className={hide ? "hideNav" : ""}
                    onClick={() => {
                        //if open then close hamburger
                        if (navExpanded) hamburgerClickHandler();
                        history.push("/login");
                    }}
                >
                    Login
                </li>
            );
        return null;
    };

    return (
        <nav
            className="navbar"
            style={{ marginBottom: navExpanded ? "20rem" : undefined }}
        >
            <div className="logo">LOGO</div>
            <ul className="navbar-links left">
                <li
                    onClick={() => {
                        if (navExpanded) hamburgerClickHandler();
                        history.push("/");
                    }}
                >
                    Home page
                </li>
                <li
                    onClick={() => {
                        if (navExpanded) hamburgerClickHandler();
                        history.push("/admin");
                    }}
                >
                    Admin secret
                </li>
                {authButtons(true)}
            </ul>
            <ul className="navbar-links right">{authButtons(false)}</ul>
            <div className="hamburger" onClick={hamburgerClickHandler}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;
