import React, { useState } from "react";
import { useHistory } from "react-router";
import { useGetUserQuery, useLogoutMutation } from "generated/graphql";
import { setAccessToken } from "utils/getToken";
import { CgCrown } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

interface NavbarProps {}

const toggler = (links: NodeListOf<Element>, nameOfClass: string) => {
    links.forEach((link) => {
        link.classList.toggle(nameOfClass);
    });
};

const Navbar: React.FC<NavbarProps> = () => {
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
        console.log(data, "data");

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
                    <BiLogIn className="login-icon link" />
                </li>
            );
        return null;
    };

    if (history.location.pathname === "/") return null;

    return (
        <nav
            className="navbar"
            style={{ marginBottom: navExpanded ? "20rem" : undefined }}
        >
            <div className="logo" onClick={() => history.push("/")}>
                <CgCrown />
                Langyboost
            </div>
            <ul className="navbar-links left">
                <li
                    onClick={() => {
                        if (navExpanded) hamburgerClickHandler();
                        history.push("/courses");
                    }}
                    className="link"
                >
                    Courses
                </li>
                <li
                    onClick={() => {
                        if (navExpanded) hamburgerClickHandler();
                        history.push("/articles");
                    }}
                    className="link"
                >
                    Articles
                </li>
                <li onClick={() => history.push("/resources")} className="link">
                    Resources
                </li>
                {authButtons(true)}
            </ul>
            <ul className="navbar-links right">
                <li>
                    <p>2</p>
                    <img
                        className="fire-icon"
                        alt="fireIcon"
                        height="30"
                        onClick={() => history.push("/cards/enDu")}
                        width="30"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FireIcon.svg/1501px-FireIcon.svg.png"
                    />
                </li>
                <li>
                    <p>5</p>
                    <img
                        className="profile-icon"
                        alt="swedenIcon"
                        height="30"
                        onClick={() => history.push("/course/8")}
                        width="30"
                        src="https://static.posters.cz/image/750/placky-odznaky/flag-sweden-i2430.jpg"
                    />
                </li>
                <li>
                    <p className="profile-name">Jill</p>
                    <img
                        className="profile-icon"
                        alt="girl"
                        height="30"
                        width="30"
                        onClick={() => history.push("/settings")}
                        src="https://i.pinimg.com/originals/fb/b9/63/fbb963ea21a040904d5331af46c70f5e.jpg"
                    />
                </li>
                <hr style={{ height: "30px" }} />
                <li>
                    <FiSettings
                        onClick={() => history.push("/settings")}
                        className="settings-icon link"
                    />
                </li>
                <hr style={{ height: "30px" }} />
                {authButtons(false)}
            </ul>
            <div className="hamburger" onClick={hamburgerClickHandler}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;
