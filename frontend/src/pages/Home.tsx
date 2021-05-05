import { useHelloQuery } from "generated/graphql";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
    const { data, loading } = useHelloQuery();

    if (!data || loading) return <div>seems to be loading</div>;

    return (
        <div className="">
            <h2>Welcome to out new home page</h2>
            {data.tryingOut.map((el, idx: number) => (
                <p key={idx}>hello, your data goes here: {el.email}</p>
            ))}
        </div>
    );
};

export default Home;
