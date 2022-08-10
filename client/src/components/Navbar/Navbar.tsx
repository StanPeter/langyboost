import React, { useState } from "react";
import { useHistory } from "react-router";
import { useGetUserQuery, useLogoutMutation } from "generated/graphql";
import { setAccessToken } from "utils/getToken";
import { CgCrown } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import styles from "./navbar.module.scss";
import globalStyles from "styles/style.module.scss";

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
                    className={hide ? styles.hideNav : ""}
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
                    className={hide ? styles.hideNav : ""}
                    onClick={() => {
                        //if open then close hamburger
                        if (navExpanded) hamburgerClickHandler();
                        history.push("/auth");
                    }}
                >
                    <BiLogIn
                        className={`${globalStyles.link} ${styles.loginIcon}`}
                    />
                </li>
            );
        return null;
    };

    if (history.location.pathname === "/") return null;

    return (
        <nav
            className={styles.navbar}
            style={{ marginBottom: navExpanded ? "20rem" : undefined }}
        >
            <div className={styles.logo} onClick={() => history.push("/")}>
                <CgCrown />
                Langyboost
            </div>
            <ul className={`${styles.navbarLinks} ${styles.left}`}>
                <li
                    onClick={() => {
                        if (navExpanded) hamburgerClickHandler();
                        history.push("/courses");
                    }}
                    className={globalStyles.link}
                >
                    Courses
                </li>
                <li
                    onClick={() => {
                        if (navExpanded) hamburgerClickHandler();
                        history.push("/articles");
                    }}
                    className={globalStyles.link}
                >
                    Articles
                </li>
                <li
                    onClick={() => history.push("/resources")}
                    className={globalStyles.link}
                >
                    Resources
                </li>
                {authButtons(true)}
            </ul>
            <ul className={`${styles.navbarLinks} ${styles.right}`}>
                <li>
                    <p>2</p>
                    <img
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
                        className={styles.profileIcon}
                        alt="swedenIcon"
                        height="30"
                        onClick={() => history.push("/course/8")}
                        width="30"
                        src="https://static.posters.cz/image/750/placky-odznaky/flag-sweden-i2430.jpg"
                    />
                </li>
                <li>
                    <p className={styles.profileName}>Jill</p>
                    <img
                        className={styles.profileIcon}
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
                        className={`${styles.settingsIcon} ${globalStyles.link}`}
                    />
                </li>
                <hr style={{ height: "30px" }} />
                {authButtons(false)}
            </ul>
            <div className="hamburger" onClick={hamburgerClickHandler}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </nav>
    );
};

export default Navbar;
