import Store from "components/hoc/Store";
import Routes from "components/layouts/Routes";
import React from "react";
import "./styles/antDesignStyles.less";
import "./styles/globalStyles.module.scss";

const App: React.FC = () => {
    return (
        <Store>
            <Routes />
        </Store>
    );
};

export default App;
