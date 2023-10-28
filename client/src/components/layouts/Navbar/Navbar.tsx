import FireIcon from 'assets/images/fireIcon.png';
import ProfilePicture from 'assets/images/profilePicture.jpg';
import SwedenFlag from 'assets/images/swedenFlag.jpg';
import Image from 'components/UI/Image';
import Link from 'components/UI/Link';
import Paragraph from 'components/UI/Paragraph';
import Span from 'components/UI/Span';
import React, { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { CgCrown } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
// import { setAccessToken } from "utils/getToken";
import styles from './navbar.module.scss';

const HAMBURGER_MENU = [
    { text: 'COURSES', url: '/courses' },
    { text: 'ARTICLES', url: '/articles' },
    { text: 'RESOURCES', url: '/resources' },
    { text: 'CURRENT_LESSON', url: '/cards/current' },
    { text: 'CURRENT_COURSE', url: '/course/current' },
    { text: 'PROFILE', url: '/profile' },
    { text: 'SETTINGS', url: '/settings' },
    { text: 'SIGN_IN', url: '/auth' }
];
interface NavbarProps {}

// navigation bar section
const Navbar: React.FC<NavbarProps> = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [expandedHelper, setExpandedHelper] = useState<boolean>(false);

    const navigate = useNavigate();
    // const { data, loading } = useGetUserQuery();
    // const [logout, { client }] = useLogoutMutation();
    const data = { getUser: '' };
    const loading = false;

    // on click handler
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

    // login and logout buttons
    const authButtons = (hide: boolean) => {
        if (data?.getUser)
            return (
                <Link
                    classes={hide ? styles.authIcon : ''}
                    onClick={async () => {
                        // await logout();
                        // sessionStorage.setItem("accessToken", "");
                        // await client.resetStore();
                    }}
                    text={'LOGOUT'}
                />
            );
        else if (!data?.getUser && !loading)
            return (
                <Link
                    classes={hide ? styles.authIcon : ''}
                    onClick={() => {
                        //if open then close hamburger
                        navigate('/auth');
                    }}
                >
                    <BiLogIn className={`${styles.loginIcon}`} />
                </Link>
            );
        return null;
    };

    // Hamburger section (smaller screen)
    const hamburgerSection = expanded ? (
        <ul className={`${styles.expandedNavLinks} ${expandedHelper && styles.expanded}`}>
            {HAMBURGER_MENU.map(el => (
                <Link
                    text={el.text}
                    onClick={async () => {
                        await hamburgerClickHandler();
                        navigate(el.url);
                    }}
                    classes={expandedHelper ? styles.transition : ''}
                    whiteText
                />
            ))}
        </ul>
    ) : null;

    return (
        <nav className={`${styles.navbar} ${expanded ? styles.expandedNavBar : ''}`}>
            <div className={styles.logo} onClick={() => navigate('/')}>
                <CgCrown />
                <Span text="LANGYBOOST" />
            </div>
            <ul className={`${styles.navbarLinks} ${styles.left}`}>
                <Link
                    text="COURSES"
                    onClick={() => {
                        navigate('/courses');
                    }}
                />
                <Link
                    text="ARTICLES"
                    onClick={() => {
                        navigate('/articles');
                    }}
                />
                <Link
                    text="RESOURCES"
                    onClick={() => {
                        navigate('/resources');
                    }}
                />
            </ul>
            <ul className={`${styles.navbarLinks} ${styles.right} `}>
                <Link>
                    <Paragraph text="5" whiteText shouldTranslate={false} />
                    <Image src={FireIcon} alt="fireIcon" onClick={() => navigate('/cards/current')} />
                </Link>
                <Link>
                    <Paragraph text="5" whiteText shouldTranslate={false} />
                    <Image src={SwedenFlag} alt="swedenIcon" onClick={() => navigate('/course/current')} />
                </Link>
                <Link>
                    <Paragraph text="Jill" whiteText shouldTranslate={false} />
                    <Image src={ProfilePicture} alt="profilePicture" onClick={() => navigate('/profile')} />
                </Link>
                <hr className={styles.separator} />
                <Link>
                    <FiSettings onClick={() => navigate('/settings')} className={`${styles.settingsIcon}`} />
                </Link>
                <hr className={styles.separator} />
                {authButtons(false)}
            </ul>
            <div className={styles.hamburger} onClick={hamburgerClickHandler}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {hamburgerSection}
        </nav>
    );
};

export default Navbar;
