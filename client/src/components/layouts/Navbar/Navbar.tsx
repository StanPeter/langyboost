import FireIcon from 'assets/images/fireIcon.png';
import ProfilePicture from 'assets/images/profilePicture.jpg';
import SwedenFlag from 'assets/images/swedenFlag.jpg';
import Image from 'components/UI/Image';
import Link from 'components/UI/Link';
import Paragraph from 'components/UI/Paragraph';
import Span from 'components/UI/Span';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { CgCrown } from 'react-icons/cg';
// import { setAccessToken } from "utils/getToken";
import styles from './navbar.module.scss';


const HAMBURGER_MENU = [
    { text: 'COURSES', url: '/courses' },
    { text: 'ARTICLES', url: '/articles' },
    { text: 'RESOURCES', url: '/resources' },
    { text: 'CURRENT_LESSON', url: '/cards' },
    { text: 'CURRENT_COURSE', url: '/courses' },
    { text: 'PROFILE', url: '/profile' },
    { text: 'SETTINGS', url: '/profile' },
    { text: 'SIGN_IN', url: '/auth' },

];
interface NavbarProps {}

// navigation bar section
const Navbar: React.FC<NavbarProps> = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [expandedHelper, setExpandedHelper] = useState<boolean>(false);

    const router = useRouter();
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
                        router.push('/auth');
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
                        router.push(el.url);
                    }}
                    classes={expandedHelper ? styles.transition : ''}
                    whiteText

                />
            ))}
        </ul>
    ) : null;

    return (
        <nav className={`${styles.navbar} ${expanded ? styles.expandedNavBar : ''}`}>
            <div className={styles.logo} onClick={() => router.push('/')}>
                <CgCrown />
                <Span text="LANGYBOOST" />
            </div>

            <ul className={`${styles.navbarLinks} ${styles.left}`}>
                <Link
                    text="COURSES"
                    onClick={() => {
                        router.push('/courses');
                    }}
                />

                <Link
                    text="ARTICLES"
                    onClick={() => {
                        router.push('/articles');
                    }}
                />

                <Link
                    text="RESOURCES"
                    onClick={() => {
                        router.push('/resources');
                    }}
                />

            </ul>
            <ul className={`${styles.navbarLinks} ${styles.right} `}>
                <Link>
                    <Paragraph text="5" whiteText shouldTranslate={false} />
                    <Image src={FireIcon} alt="fireIcon" onClick={() => router.push('/courses/level/1')} />
                </Link>
                <Link>

                    <Paragraph text="5" whiteText shouldTranslate={false} />
                    <Image src={SwedenFlag} alt="swedenIcon" onClick={() => router.push('/courses/1')} />
                </Link>
                <Link>

                    <Paragraph text="Jill" whiteText shouldTranslate={false} />
                    <Image src={ProfilePicture} alt="profilePicture" onClick={() => router.push('/profile')} />
                </Link>
                <hr className={styles.separator} />
                {/* <Link>

                    <FiSettings onClick={() => router.push('/settings')} className={`${styles.settingsIcon}`} />
                </Link> */}
                {/* <hr className={styles.separator} /> */}
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
