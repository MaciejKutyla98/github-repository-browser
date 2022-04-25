import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    ApolloClient,
    InMemoryCache,
    HttpLink, ApolloProvider
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import './App.scss'
import {BrowserRouter} from "react-router-dom";

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
    <BrowserRouter>
        <ApolloProvider client={client} >
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById("root")
);

