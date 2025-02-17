import { Box, Link, styled } from '@mui/material';
import Paragraph from 'components/UI/Paragraph';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// const CURRENT_YEAR = new Date().getFullYear(); // Compute once at module level

const StyledFooter = styled('footer')(({ theme }) => ({
    width: '100%',
    color: 'var(--color-main-light)',
    backgroundColor: 'var(--color-main)',
    padding: '1.5rem 0',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    borderRadius: '20rem 20rem 0 0',
    position: 'absolute',
    bottom: 0,
}));

// .socialNetwork
const StyledSocialNetwork = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
});

// .socialNetwork li
// const StyledSocialItem = styled('li')({
//     display: 'inline-flex',
//     margin: '0 1rem',
// });

const hoverBackground = (network: string) => {
    switch (network) {
        case 'facebook':
            return '#3b5998';
        case 'twitter':
            return '#33ccff';
        case 'github':
            return '#161b22';
        case 'linkedin':
            return '#007bb7';
        case 'instagram':
            return `
        linear-gradient(
          45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%
        )
      `;
        default:
            return 'var(--color-main-light)';
    }
};

const StyledLink = styled(Link)<{ $icon: string }>(({ theme, $icon }) => ({
    backgroundColor: 'var(--color-main-light)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '3.5rem',
    height: '3.5rem',
    fontSize: '1.5rem',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    '&:hover': {
        background: hoverBackground($icon),
        '& i': {
            color: '#e7eff6',
            transform: 'rotate(360deg)',
        },
    },
    [theme.breakpoints.up(750)]: {
        width: '2.5rem',
        height: '2.5rem',
        fontSize: '1.2rem',
    },
}));

const SocialIcon = styled('i')({
    color: 'var(--color-text-dark)',
    transition: 'all 0.8s ease',
});

const StyledCopyright = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.5rem 0',
    fontStyle: 'italic',
    fontSize: '0.875rem',
    '& p': {
        margin: '0 0.3rem',
        '&:last-child': {
            display: 'none',
        },
    },
    '& a': {
        padding: '0 0.3rem',
        color: 'var(--color-text-dark)',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
            transform: 'scale(var(--transform-scale))',
            color: 'var(--color-text-light)',
        },
    },
    [theme.breakpoints.up(600)]: {
        fontSize: '1rem',
        '& p:last-child': {
            display: 'block',
        },
    },
}));

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <StyledSocialNetwork>
                <StyledLink $icon="linkedin" href="#">
                    <SocialIcon>
                        <FaLinkedinIn />
                    </SocialIcon>
                </StyledLink>
                <StyledLink $icon="twitter" href="#">
                    <SocialIcon>
                        <FaTwitter />
                    </SocialIcon>
                </StyledLink>
                <StyledLink $icon="github" href="#">
                    <SocialIcon>
                        <FaGithub />
                    </SocialIcon>
                </StyledLink>
                <StyledLink $icon="facebook" href="#">
                    <SocialIcon>
                        <FaFacebookF />
                    </SocialIcon>
                </StyledLink>
                <StyledLink $icon="instagram" href="#">
                    <SocialIcon>
                        <FaInstagram />
                    </SocialIcon>
                </StyledLink>
            </StyledSocialNetwork>

            <StyledCopyright>
                <Paragraph text="COPYRIGHT" />
                <a onClick={() => {}}>2025</a>
                <Paragraph text="ALL_RIGHTS_RESERVED" />
            </StyledCopyright>
        </StyledFooter>
    );
};

export default Footer;
