import { ThemeProvider } from '@mui/material/styles';
import 'components/UI/Carousel/carousel.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import 'styles/globalClasses.css';
import 'styles/globalStyles.css';
import { theme } from 'styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <SessionProvider session={pageProps.session}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp;
