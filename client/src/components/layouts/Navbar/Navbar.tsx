import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGetUserQuery, useLogoutMutation } from "generated/graphql";
import { setAccessToken } from "utils/getToken";
import { CgCrown } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import styles from "./navbar.module.scss";

interface NavbarProps {}

const toggler = (links: NodeListOf<Element>, nameOfClass: string) => {
    links.forEach((link) => {
        link.classList.toggle(nameOfClass);
    });
};

const Navbar: React.FC<NavbarProps> = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [expandedHelper, setExpandedHelper] = useState<boolean>(false);

    const navigate = useNavigate();
    const { data, loading } = useGetUserQuery();
    const [logout, { client }] = useLogoutMutation();

    const hamburgerClickHandler = () =>
        new Promise((res) => {
            //if changed, set it up in expanded class scss animation too!
            if (expanded)
                setTimeout(() => {
                    setExpanded(false);
                    res(true);
                }, 800);
            else {
                setExpanded(true);
                res(true);
            }

            setExpandedHelper(!expanded);
        });

    const authButtons = (hide: boolean) => {
        // console.log(data, "data");

        if (data?.getUser)
            return (
                <li
                    className={hide ? styles.authIcon : ""}
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
                    className={hide ? styles.authIcon : ""}
                    onClick={() => {
                        //if open then close hamburger
                        navigate("/auth");
                    }}
                >
                    <BiLogIn className={`${styles.loginIcon}`} />
                </li>
            );
        return null;
    };

    return (
        <nav className={styles.navbar} style={{ marginBottom: expanded ? "20rem" : undefined }}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <CgCrown />
                <span>Langyboost</span>
            </div>
            <ul className={`${styles.navbarLinks} ${styles.left}`}>
                <li
                    onClick={() => {
                        navigate("/courses");
                    }}
                >
                    Courses
                </li>
                <li
                    onClick={() => {
                        navigate("/articles");
                    }}
                >
                    Articles
                </li>
                <li onClick={() => navigate("/resources")}>Resources</li>
            </ul>
            <ul className={`${styles.navbarLinks} ${styles.right} `}>
                <li>
                    <p>2</p>
                    <img
                        alt="fireIcon"
                        height="30"
                        onClick={() => navigate("/cards/enDu")}
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
                        onClick={() => navigate("/course/8")}
                        width="30"
                        src="https://static.posters.cz/image/750/placky-odznaky/flag-sweden-i2430.jpg"
                    />
                </li>
                <li>
                    <p>Jill</p>
                    <img
                        className={styles.profileIcon}
                        alt="girl"
                        height="30"
                        width="30"
                        onClick={() => navigate("/profile")}
                        src="https://i.pinimg.com/originals/fb/b9/63/fbb963ea21a040904d5331af46c70f5e.jpg"
                    />
                </li>
                <hr style={{ height: "30px" }} />
                <li>
                    <FiSettings
                        onClick={() => navigate("/settings")}
                        className={`${styles.settingsIcon}`}
                    />
                </li>
                <hr style={{ height: "30px" }} />
                {authButtons(false)}
            </ul>
            <div className={styles.hamburger} onClick={hamburgerClickHandler}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {expanded ? (
                <ul className={`${styles.expandedNavLinks} ${expandedHelper && styles.expanded}`}>
                    <li
                        onClick={async () => {
                            await hamburgerClickHandler();
                            navigate("/courses");
                        }}
                        className={`${expandedHelper ? styles.transition : ""}`}
                    >
                        Courses
                    </li>
                    <li
                        onClick={async () => {
                            await hamburgerClickHandler();
                            navigate("/articles");
                        }}
                        className={`${expandedHelper ? styles.transition : ""}`}
                    >
                        Articles
                    </li>
                    <li
                        onClick={async () => {
                            await hamburgerClickHandler();
                            navigate("/resources");
                        }}
                        className={`${expandedHelper ? styles.transition : ""}`}
                    >
                        Resources
                    </li>
                    <li
                        onClick={async () => {
                            await hamburgerClickHandler();
                            navigate("/cards/enDu");
                        }}
                        className={`${expandedHelper ? styles.transition : ""}`}
                    >
                        Current lesson
                    </li>
                    <li
                        onClick={async () => {
                            await hamburgerClickHandler();
                            navigate("/course/8");
                        }}
                        className={`${expandedHelper ? styles.transition : ""}`}
                    >
                        Current course
                    </li>
                    <li
                        onClick={async () => {
                            await hamburgerClickHandler();
                            navigate("/profile");
                        }}
                        className={`${expandedHelper ? styles.transition : ""}`}
                    >
                        Profile
                    </li>
                    <li
                        onClick={async () => {
                            await hamburgerClickHandler();
                            navigate("/settings");
                        }}
                        className={`${expandedHelper ? styles.transition : ""}`}
                    >
                        Settings
                    </li>
                    <li
                        onClick={async () => {
                            await hamburgerClickHandler();
                            await logout();
                            setAccessToken("");
                            await client.resetStore();
                        }}
                        className={`${expandedHelper ? styles.transition : ""}`}
                    >
                        Logout
                    </li>
                </ul>
            ) : null}
        </nav>
    );
};

export default Navbar;
