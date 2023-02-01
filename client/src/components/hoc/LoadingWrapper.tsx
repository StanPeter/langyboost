import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import TranslateText from "components/hoc/TranslateText";
import CSS from "csstype";
import React from "react";
import getLanguageObject from "utils/getLanguageObject";

// NOT IMPLEMENTED YET

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24
        }}
        spin={true}
    />
);

type LoadingWrapperProps = {
    children: React.ReactNode;
    loading: boolean;
    error?: string;
    style?: CSS.Properties;
};

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children, loading, error, style }: LoadingWrapperProps) => {
    const language = "en";
    if (error)
        return (
            <p>
                <TranslateText>ERROR_LOADING</TranslateText>: {error}
            </p>
        );
    if (loading)
        return (
            <Spin indicator={antIcon} tip={getLanguageObject(language).NACITANI} size="large" style={style}>
                {children}
            </Spin>
        );

    return <>{children}</>;
};

export default LoadingWrapper;
