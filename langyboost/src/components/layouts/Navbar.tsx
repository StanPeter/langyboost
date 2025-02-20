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
import { keyframes, styled } from '@mui/material';
import { theme } from 'styles/theme';

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

// Keyframes for animations
const circleAnimationIn = keyframes`
  0% { clip-path: circle(0px at 96% -1rem); }
  100% { clip-path: circle(140% at 0 0); }
`;

const circleAnimationOut = keyframes`
  0% { clip-path: circle(140% at 0 0); }
  100% { clip-path: circle(0px at 96% -1rem); }
`;

// Styled components
const StyledNavbar = styled('nav')<{ expanded: boolean }>(({ theme, expanded }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '3rem',
    backgroundColor: 'var(--color-main)',
    color: 'var(--color-main-light)',
    fontSize: '1.2rem',
    marginBottom: expanded ? '27rem' : 0,

    '& p': {
        fontSize: '1rem !important',
    },

    [theme.breakpoints.up(750)]: {
        justifyContent: 'unset',
        width: '92%',
        margin: '2rem auto 0',
        borderRadius: '4rem',
    },
}));

const Logo = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2.3rem',
    width: '20%',
    minWidth: '12rem',
    border: '1px solid var(--color-main-light)',
    borderRadius: '100%',
    marginLeft: '1rem',
    backgroundColor: 'var(--color-main-light)',
    color: 'var(--color-text-dark)',
    cursor: 'pointer',

    '& svg': {
        marginRight: '0.2rem',
    },

    [theme.breakpoints.up(750)]: {
        position: 'unset',
        width: '5rem',
        minWidth: 'unset',
        fontSize: '1.5rem',

        '& span': {
            display: 'none',
        },
    },

    [theme.breakpoints.up(950)]: {
        fontSize: 'unset',
        width: '20%',
        minWidth: '10rem',

        '& span': {
            display: 'unset',
        },
    },
});

const NavbarLinks = styled('ul')<{ variant?: 'left' | 'right' }>(({ theme, variant }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    minWidth: '40%',
    maxWidth: 'calc(50% - 2.5rem)',
    width: 'calc(50% - 2.5rem)',
    margin: 0,
    listStyle: 'none',

    '& li': {
        padding: '0 0.6rem',
        fontSize: '0.9rem',

        '&:hover': {
            cursor: 'pointer',
            scale: 'var(--transform-scale)',
            fontWeight: 900,
        },
    },

    ...(variant === 'left' && {
        display: 'none',
        justifyContent: 'center',

        [theme.breakpoints.up(750)]: {
            display: 'flex',
        },
    }),

    ...(variant === 'right' && {
        display: 'none',
        justifyContent: 'flex-end',
        marginRight: '1rem',

        '& li': {
            display: 'flex',
            padding: '0 0.8rem',

            '&:nth-child(2)': {
                padding: 0,
            },

            '& p': {
                padding: '0.3rem',
                fontSize: '1.2rem',
            },
        },

        [theme.breakpoints.up(750)]: {
            display: 'flex',
            marginRight: 'unset',
        },
    }),

    [theme.breakpoints.up(950)]: {
        maxWidth: 'calc(50% - 7.5rem)',

        '& li': {
            padding: '0 0.8rem',
            fontSize: '1rem',
        },
    },

    [theme.breakpoints.up(1200)]: {
        '& li': {
            padding: '0 1rem',
        },
    },

    [theme.breakpoints.up(1500)]: {
        '& li': {
            padding: '0 2rem',
            letterSpacing: '0.1rem',
        },
    },
}));

const Separator = styled('hr')({
    height: '2rem',
    color: 'var(--color-main-light)',
});

const Hamburger = styled('div')({
    display: 'none',

    [theme.breakpoints.down(750)]: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        padding: '0.5rem',

        '& div': {
            width: '25px',
            height: '3px',
            backgroundColor: 'var(--color-main-light)',
            margin: '3px 0',
            transition: '0.4s',
        },
    },
});

const ExpandedNavLinks = styled('ul')<{ expandedHelper: boolean }>(({ theme, expandedHelper }) => ({
    position: 'absolute',
    top: '3rem',
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'var(--color-main)',
    margin: 0,
    padding: '1rem 0',
    listStyle: 'none',
    animation: `${expandedHelper ? circleAnimationIn : circleAnimationOut} $animationLength ease forwards`,
}));

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
        if (hide) return null;
        if (data?.getUser)
            return (
                <Link
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
                    onClick={() => {
                        //if open then close hamburger
                        router.push('/auth');
                    }}
                >
                    <BiLogIn />
                </Link>
            );
        return null;
    };

    // Hamburger section (smaller screen)
    const hamburgerSection = expanded ? (
        <ul className={`${expandedHelper && expanded}`}>
            {HAMBURGER_MENU.map(el => (
                <Link
                    text={el.text}
                    onClick={async () => {
                        await hamburgerClickHandler();
                        router.push(el.url);
                    }}
                    whiteText
                />
            ))}
        </ul>
    ) : null;

    return (
        <StyledNavbar expanded={expanded}>
            <Logo onClick={() => router.push('/')}>
                <CgCrown />
                <Span text="LANGYBOOST" />
            </Logo>

            <NavbarLinks variant="left">
                {/* Left links content */}
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
            </NavbarLinks>
            <NavbarLinks variant="right">
                {/* Right links content */}
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
                {/* <Link>
                    <FiSettings onClick={() => router.push('/settings')} className={`${styles.settingsIcon}`} />
                </Link> */}
                {/* <hr className={styles.separator} /> */}
                <Separator />
                {authButtons(false)}
            </NavbarLinks>

            <Hamburger onClick={hamburgerClickHandler}>
                <div></div>
                <div></div>
                <div></div>
            </Hamburger>

            {expanded && (
                <ExpandedNavLinks expandedHelper={expandedHelper}>
                    {hamburgerSection}
                    {/* Expanded menu content */}
                </ExpandedNavLinks>
            )}
        </StyledNavbar>
    );
};

export default Navbar;
