import Dialog from 'components/UI/Modal/Dialog';
import Paragraph from 'components/UI/Paragraph';
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, RouteProps, useNavigate } from 'react-router-dom';

interface IErrorFallback {
    resetErrorBoundary: (...args: unknown[]) => void;
    error: Error;
    showDialog: boolean;
}

// fallback on error
const ErrorFallback: React.FC<IErrorFallback> = ({ error, resetErrorBoundary, showDialog }) => {
    const navigate = useNavigate();

    const content = <Paragraph shouldTranslate={false} text={error.message} />;

    return showDialog ? (
        <Dialog
            title="UNEXPECTED_ERROR"
            content={content}
            hideFunction={() => {
                resetErrorBoundary();
            }}
            submitBtn={{ text: 'OK', useCase: 'middle', onSubmit: () => navigate(0) }}
        />
    ) : null;
};

interface IErrorBoundary extends RouteProps {}

const ErrorBoundaryHoc: React.FC<IErrorBoundary> = ({ element }) => {
    const [showDialog, setShowDialog] = useState(true);

    return (
        <ErrorBoundary
            FallbackComponent={(props) => ErrorFallback({ ...props, showDialog: showDialog })}
            onReset={() => {
                console.log('RESET');
                setShowDialog(false);
            }}
            onError={() => setShowDialog(true)}
            // resetKeys={[showDialog]}
        >
            <Outlet />
        </ErrorBoundary>
    );
};

export default ErrorBoundaryHoc;
