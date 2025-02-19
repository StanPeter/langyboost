// import Dialog from 'components/UI/Dialog';
// import Paragraph from 'components/UI/Paragraph';
// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import { ErrorBoundary } from 'react-error-boundary';

import Dialog from 'components/UI/Dialog';
import Paragraph from 'components/UI/Paragraph';
import ErrorBoundary from 'next/dist/client/components/error-boundary';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface IErrorFallback {
    resetErrorBoundary: (...args: unknown[]) => void;
    error: Error;
    showDialog: boolean;
}

// // fallback on error
const ErrorFallback: React.FC<IErrorFallback> = ({ error, resetErrorBoundary, showDialog }) => {
    const router = useRouter();

    const content = <Paragraph shouldTranslate={false} text={error.message} />;

    return showDialog ? (
        <Dialog
            title="UNEXPECTED_ERROR"
            content={content}
            hideFunction={() => {
                resetErrorBoundary();
            }}
            submitBtn={{ text: 'OK', useCase: 'middle', onSubmit: () => router.reload() }}
        />
    ) : null;
};

interface IErrorBoundary {
    children: React.ReactNode;
}

const ErrorBoundaryHoc: React.FC<IErrorBoundary> = ({ children }) => {
    const [errorKey, setErrorKey] = useState(0);
    const router = useRouter();
    const [lastError, setLastError] = useState<Error | null>(null);

    const handleReset = () => {
        setErrorKey(prev => prev + 1); // Force remount of children
        setLastError(null);
        router.replace('/'); // Optional: Redirect to safe page
    };

    const handleError = (error: Error, info: { componentStack: string }) => {
        console.error('Error Boundary Caught:', error, info);
        setLastError(error);
        // Send error to monitoring service (e.g. Sentry)
    };

    return (
        <ErrorBoundary
            FallbackComponent={({ resetErrorBoundary }) => (
                <ErrorFallback error={lastError} resetErrorBoundary={resetErrorBoundary} />
            )}
            onReset={handleReset}
            onError={handleError}
            resetKeys={[errorKey]}
        >
            <React.Fragment key={errorKey}>{children}</React.Fragment>
        </ErrorBoundary>
    );
};

export default ErrorBoundaryHoc;
