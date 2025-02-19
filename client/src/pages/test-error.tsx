import { useEffect, useState } from 'react';

const TestErrorPage = () => {
    const [shouldError, setShouldError] = useState(false);

    // Client-side error after render
    useEffect(() => {
        if (shouldError) {
            throw new Error('Test error from useEffect');
        }
    }, [shouldError]);

    return (
        <div>
            <h1>Error Boundary Test Page</h1>

            {/* Button to trigger immediate error */}
            <button
                onClick={() => {
                    throw new Error('Test error from click');
                }}
            >
                Throw Immediate Error
            </button>

            {/* Button to trigger error in useEffect */}
            <button onClick={() => setShouldError(true)}>Throw useEffect Error</button>

            {/* Error in render */}
            {shouldError && <ThrowRenderError />}
        </div>
    );
};

const ThrowRenderError = () => {
    throw new Error('Test error during render');
};

export default TestErrorPage;
