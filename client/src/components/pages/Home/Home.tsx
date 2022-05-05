import PhraseCards from "components/pages/Home/PhraseCards/PhraseCards";
import { useHelloQuery } from "generated/graphql";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    //network-only makes it to do a request every single time
    const { data, loading } = useHelloQuery({ fetchPolicy: "network-only" });

    if (!data || loading) return <div>seems to be loading</div>;

    return <PhraseCards />;
};

export default Home;
