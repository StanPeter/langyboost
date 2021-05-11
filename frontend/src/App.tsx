import Routes from "components/Routes";
import React, { useEffect, useState } from "react";
import { setAccessToken } from "utils/getToken";

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

    return <Routes />;
};

export default App;
