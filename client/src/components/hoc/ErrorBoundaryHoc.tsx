import Dialog from 'components/UI/Dialog';
import Paragraph from 'components/UI/Paragraph';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';


interface IErrorFallback {
    resetErrorBoundary: (...args: unknown[]) => void;
    error: Error;
    showDialog: boolean;
}

// fallback on error
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
    element: React.ReactNode;
}

const ErrorBoundaryHoc: React.FC<IErrorBoundary> = ({ element }) => {
    const [showDialog, setShowDialog] = useState(true);

    return (
        <ErrorBoundary
            FallbackComponent={props => ErrorFallback({ ...props, showDialog: showDialog })}
            onReset={() => {
                console.log('RESET');
                setShowDialog(false);
            }}
            onError={() => setShowDialog(true)}
            // resetKeys={[showDialog]}
        >
            {element}
        </ErrorBoundary>

    );
};

export default ErrorBoundaryHoc;
