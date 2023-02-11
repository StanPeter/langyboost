import FireIcon from "assets/images/fireIcon.png";
import ProfilePicture from "assets/images/profilePicture.jpg";
import SwedenFlag from "assets/images/swedenFlag.jpg";
import Image from "components/UI/Image";
import Link from "components/UI/Link";
import Paragraph from "components/UI/Paragraph";
import { useGetUserQuery, useLogoutMutation } from "generated/graphql";
import React, { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { CgCrown } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router";
import { setAccessToken } from "utils/getToken";
import styles from "./navbar.module.scss";

const HAMBURGER_MENU = [
    { text: "COURSES", url: "/courses" },
    { text: "ARTICLES", url: "/articles" },
    { text: "RESOURCES", url: "/resources" },
    { text: "CURRENT_LESSON", url: "/cards/current" },
    { text: "CURRENT_COURSE", url: "/course/current" },
    { text: "PROFILE", url: "/profile" },
    { text: "SETTINGS", url: "/settings" },
    { text: "SIGN_IN", url: "/auth" }
];
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [expandedHelper, setExpandedHelper] = useState<boolean>(false);

    const navigate = useNavigate();
    const { data, loading } = useGetUserQuery();
    const [logout, { client }] = useLogoutMutation();

    const hamburgerClickHandler = () =>
        new Promise(res => {
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

    const authSection = expanded ? (
        <ul className={`${styles.expandedNavLinks} ${expandedHelper && styles.expanded}`}>
            {HAMBURGER_MENU.map(el => (
                <Link
                    text={el.text}
                    onClick={async () => {
                        await hamburgerClickHandler();
                        navigate(el.url);
                    }}
                    classes={expandedHelper ? styles.transition : ""}
                    whiteText
                />
            ))}
        </ul>
    ) : null;

    return (
        <nav className={styles.navbar} style={{ marginBottom: expanded ? "20rem" : undefined }}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <CgCrown />
                <span>Langyboost</span>
            </div>
            <ul className={`${styles.navbarLinks} ${styles.left}`}>
                <Link
                    text="COURSES"
                    onClick={() => {
                        navigate("/courses");
                    }}
                />
                <Link
                    text="ARTICLES"
                    onClick={() => {
                        navigate("/articles");
                    }}
                />
                <Link
                    text="RESOURCES"
                    onClick={() => {
                        navigate("/resources");
                    }}
                />
            </ul>
            <ul className={`${styles.navbarLinks} ${styles.right} `}>
                <Link>
                    <Paragraph text="5" whiteText shouldTranslate={false} />
                    <Image src={FireIcon} alt="fireIcon" onClick={() => navigate("/cards/current")} />
                </Link>
                <Link>
                    <Paragraph text="5" whiteText shouldTranslate={false} />
                    <Image src={SwedenFlag} alt="swedenIcon" onClick={() => navigate("/course/current")} />
                </Link>
                <Link>
                    <Paragraph text="Jill" whiteText shouldTranslate={false} />
                    <Image src={ProfilePicture} alt="profilePicture" onClick={() => navigate("/profile")} />
                </Link>
                <hr style={{ height: "30px" }} />
                <Link>
                    <FiSettings onClick={() => navigate("/settings")} className={`${styles.settingsIcon}`} />
                </Link>
                <hr style={{ height: "30px" }} />
                {authButtons(false)}
            </ul>
            <div className={styles.hamburger} onClick={hamburgerClickHandler}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {authSection}
        </nav>
    );
};

export default Navbar;
