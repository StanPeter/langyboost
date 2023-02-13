import Dialog from "components/UI/Modal/Dialog";
import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet, RouteProps } from "react-router-dom";

interface IErrorFallback {
    resetErrorBoundary: (...args: unknown[]) => void;
    error: Error;
    showDialog: boolean;
}

// fallback on error
const ErrorFallback: React.FC<IErrorFallback> = ({ error, resetErrorBoundary, showDialog }) => {
    const content = <div>there was an error: error.message</div>;

    return showDialog ? (
        <Dialog
            content={content}
            hideFunction={() => {
                resetErrorBoundary();
            }}
            submitBtn={{ text: "OK", useCase: "middle" }}
        />
    ) : null;
};

interface IErrorBoundary extends RouteProps {}

const ErrorBoundaryHoc: React.FC<IErrorBoundary> = ({ element }) => {
    const [showDialog, setShowDialog] = useState(true);

    return (
        <ErrorBoundary
            FallbackComponent={props => ErrorFallback({ ...props, showDialog: showDialog })}
            onReset={() => {
                console.log("RESET");
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
