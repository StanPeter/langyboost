import Navbar from "components/Navbar";
import Routes from "components/Routes";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { setAccessToken } from "utils/getToken";
import "styles/main.scss";

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:4000/refresh_token", {
            method: "POST",
            credentials: "include",
        }).then(async (data) => {
            const { accessToken } = await data.json();

            if (accessToken) {
                setAccessToken(accessToken);
            }

            setLoading(false);
        });
    }, []);

    if (loading) return <div>App is loading...</div>;

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div className="bodyWrapper">
                    <Routes />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
