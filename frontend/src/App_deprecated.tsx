import { useQuery } from "@apollo/react-hooks";
import { RANDOM } from "graphql/random_deprecated";

interface SomeInterface {
    email: string;
    id: number;
    __typename: string;
}

function App() {
    const { data, loading } = useQuery(RANDOM);

    if (loading) return <p>It's all just loading</p>;

    console.log(data, loading);

    return (
        <div className="">
            {data.tryingOut.map((el: SomeInterface, idx: number) => (
                <p key={idx}>
                    hello, your data goes here: {JSON.stringify(el.email)}
                </p>
            ))}
        </div>
    );
}

export default App;
