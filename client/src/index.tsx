// @ts-ignore
import React from "react";
import { createRoot } from "react-dom/client";
// import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// import { TokenRefreshLink } from "apollo-link-token-refresh";
import App from "App";
// import jwtDecode from "jwt-decode";
// import { getAccessToken, setAccessToken } from "utils/getToken";
// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { Provider } from "react-redux";
import store from "store";

// http link with the correct BE api url and credentials (to get cookies)
const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
});

// each time before request get the accessToken and send in headers
const authLink = new ApolloLink((operation, forward) => {
    // retrieve the authorization token from local storage.
    const token = sessionStorage.getItem("accessToken");

    // use the setContext method to set the HTTP headers.
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : ""
        }
    });

    // call the next link in the middleware chain.
    return forward(operation);
});

// on error show console log correctly
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

//refreshing login after access token expired
// const refreshLink = new TokenRefreshLink({
//     // name of the access token in our response
//     accessTokenField: "accessToken",
//     // if token not yet expired or user doesn't have a token (guest) true should be returned
//     isTokenValidOrUndefined: () => {
//         console.log("running this");

//         const token = sessionStorage.getItem("accessToken");

//         if (!token) return true;

//         try {
//             const { exp }: { exp: number } = jwtDecode(token);

//             if (Date.now() >= exp * 1000) return false;
//             return true;
//         } catch {
//             return false;
//         }
//     },
//     //where to send the request
//     fetchAccessToken: () => {
//         return fetch("http://localhost:4000/refreshToken", {
//             method: "POST",
//             credentials: "include"
//         });
//     },
//     //callback after the request
//     handleFetch: accessToken => {
//         sessionStorage.setItem("accessToken", accessToken);
//     },
//     handleError: err => {
//         console.warn("Your refresh token is invalid. Try to relogin");
//         console.error(err);
//     }
// });

const cache = new InMemoryCache({});

const client = new ApolloClient({
    // works as a concat of many links
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache
});

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>
);

// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: authLink.concat(httpLink),
// });
