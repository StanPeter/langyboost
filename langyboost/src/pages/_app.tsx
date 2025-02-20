import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import ErrorFallback from 'components/hoc/ErrorBoundaryHoc';
import { logErrorFromClient } from 'lib/errorLogger';
import { trpc } from 'lib/trpcClient';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import store from 'store';
import 'styles/globalClasses.css';
import 'styles/globalStyles.css';
import { theme } from 'styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: '/api/trpc',
                }),
            ],
        }),
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary FallbackComponent={ErrorFallback} onError={logErrorFromClient}>
                    <Provider store={store}>
                        <SessionProvider session={pageProps.session}>
                            <ThemeProvider theme={theme}>
                                <Component {...pageProps} />
                            </ThemeProvider>
                        </SessionProvider>
                    </Provider>
                </ErrorBoundary>
            </QueryClientProvider>
        </trpc.Provider>
    );
};

export default MyApp;
