import Dialog from 'components/UI/Dialog';
import Paragraph from 'components/UI/Paragraph';
import { useRouter } from 'next/router';
import React from 'react';

interface IErrorFallback {
    resetErrorBoundary: (...args: unknown[]) => void;
    error: Error;
    showDialog: boolean;
}

const ErrorFallbackDialog: React.FC<IErrorFallback> = ({ error, resetErrorBoundary, showDialog }) => {
    const router = useRouter();

    const content = <Paragraph shouldTranslate={false} text={error.message} />;

    return showDialog ? (
        <Dialog
            title="UNEXPECTED_ERROR s"
            content={content}
            hideFunction={() => {
                resetErrorBoundary();
            }}
            submitBtn={{ text: 'OK', useCase: 'middle', onSubmit: () => router.reload() }}
        />
    ) : null;
};

interface ErrorFallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
}

export default function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
    return <ErrorFallbackDialog error={error} resetErrorBoundary={resetErrorBoundary} showDialog={true} />;
}
