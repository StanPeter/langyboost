import { ThemeProvider } from '@mui/material/styles';
import ErrorFallback from 'components/hoc/ErrorBoundaryHoc';
import { logErrorFromClient } from 'lib/errorLogger';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import store from 'store';
import 'styles/globalClasses.css';
import 'styles/globalStyles.css';
import { theme } from 'styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={logErrorFromClient}>
            <Provider store={store}>
                <SessionProvider session={pageProps.session}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </SessionProvider>
            </Provider>
        </ErrorBoundary>
    );
};

export default MyApp;
