import Routes from "components/Routes";
import React from "react";
// import { setAccessToken } from "utils/getToken";
// import Spinner from "components/Spinner";

interface AppProps {}

const App: React.FC<AppProps> = () => {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch("http://localhost:4000/refresh_token", {
    //         method: "POST",
    //         credentials: "include",
    //     }).then(async (data) => {
    //         const { accessToken } = await data.json();

    //         if (accessToken) {
    //             setAccessToken(accessToken);
    //         }

    //         setTimeout(() => {
    //             setLoading(false);
    //         }, 1000);
    //     });
    // }, []);

    // if (loading) return <Spinner />;

    return <Routes />;
};

export default App;
