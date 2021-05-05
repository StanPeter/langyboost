import { useHelloQuery } from "generated/graphql";

function App() {
    const { data, loading } = useHelloQuery();

    if (loading || !data) return <p>It's all just loading</p>;

    console.log(data, loading);

    return (
        <div className="">
            {data.tryingOut.map((el, idx: number) => (
                <p key={idx}>hello, your data goes here: {el.email}</p>
            ))}
        </div>
    );
}

export default App;
