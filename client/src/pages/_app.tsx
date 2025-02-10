import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'styles/globalClasses.css';
import 'styles/globalStyles.css';
import { theme } from 'styles/theme';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}


export default MyApp;
