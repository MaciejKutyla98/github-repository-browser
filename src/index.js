import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    ApolloClient,
    InMemoryCache,
    HttpLink, ApolloProvider
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const token = "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";

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: token ? `Token ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(
        new HttpLink({ uri: "https://api.github.com/graphql" })
    ),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root")
);

