import { Alert, Col, Row } from "antd";
import Button from "components/UI/Button/Button";
import React, { useContext } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Outlet, useNavigate } from "react-router-dom";
import { Context, defaultStoreState } from "./Store";
import TranslateText from "./TranslateText";

// NOT IMPLEMENTED YET

/* handles globally unexpected errors within the app, displays message to the user and takes him back to the login page + resets the Store */
export const ErrorBoundaryComponent: React.FC = () => {
    const { language, setStoreState } = useContext(Context);
    const navigate = useNavigate();

    /* Function for getting a message when Error happens */
    const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
        const atIndex = error?.stack?.indexOf("@");
        const componentName = atIndex && error?.stack?.substring(0, atIndex);

        return (
            <Row
                style={{
                    height: "100vh"
                }}
            >
                <Col xs={0} sm={0} md={2} lg={4} xl={4} />
                <Col xs={24} sm={24} md={20} lg={16} xl={16}>
                    <div
                        className="flex-center"
                        style={{
                            height: "100%"
                        }}
                    >
                        <Alert
                            style={{
                                width: "100%"
                            }}
                            message={<TranslateText>ERR_BOUNDARY_HEAD</TranslateText>}
                            description={
                                <>
                                    <TranslateText>ERR_BOUNDARY_TEXT</TranslateText>
                                    <pre
                                        style={{
                                            padding: "25px",
                                            color: "red",
                                            fontWeight: "bold",
                                            fontStyle: "italic"
                                        }}
                                    >
                                        {componentName && atIndex && (
                                            <p>
                                                <TranslateText>ERR_BOUNDARY_ZPUSOBENO</TranslateText>{" "}
                                                {`'${componentName}'`}
                                            </p>
                                        )}
                                        <p>
                                            {error.name} - {error.message}
                                        </p>
                                        {/* {error.stack} */}
                                    </pre>
                                    <TranslateText>ERR_BOUNDARY_AGAIN</TranslateText>
                                    <Button
                                        style={{
                                            marginTop: "15px"
                                        }}
                                        onClick={resetErrorBoundary}
                                        text="Try again"
                                    ></Button>
                                </>
                            }
                            showIcon={true}
                            type="error"
                        />
                    </div>
                </Col>
                <Col xs={0} sm={0} md={2} lg={4} xl={4} />
            </Row>
        );
    };

    /* reset the store */
    const resetStoreState = () => {
        setStoreState &&
            setStoreState({
                ...defaultStoreState,
                language: language
            });

        navigate("/auth");
    };

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={resetStoreState}>
            <Outlet />
        </ErrorBoundary>
    );
};
