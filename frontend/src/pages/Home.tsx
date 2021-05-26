import Card from "components/Card";
import { useHelloQuery } from "generated/graphql";
import React from "react";
import "styles/main.scss";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    //network-only makes it to do a request every single time
    const { data, loading } = useHelloQuery({ fetchPolicy: "network-only" });

    if (!data || loading) return <div>seems to be loading</div>;

    return (
        <div className="contentWrapper">
            <h2>Phrase generator</h2>
            <Card />
            {/* {data.tryingOut.map((el, idx: number) => (
                <p key={idx}>hello, your data goes here: {el.email}</p>
            ))} */}
        </div>
    );
};

export default Home;
