import ReactDOM from "react-dom";
import App from "App";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root")
);
