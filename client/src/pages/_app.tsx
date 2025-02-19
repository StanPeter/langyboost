import { ThemeProvider } from '@mui/material/styles';
import ErrorBoundaryHoc from 'components/hoc/ErrorBoundaryHoc';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'store';
import 'styles/globalClasses.css';
import 'styles/globalStyles.css';
import { theme } from 'styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ErrorBoundaryHoc
            element={
                <Provider store={store}>
                    <SessionProvider session={pageProps.session}>
                        <ThemeProvider theme={theme}>
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </SessionProvider>
                </Provider>
            }
        />
    );
};

export default MyApp;
