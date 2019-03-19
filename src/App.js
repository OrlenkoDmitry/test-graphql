import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './App.scss';
import Search from './routs/Search';
import Repository from './routs/Repository';

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer your personal access token`
            },
        });
    }
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className="App">
                    <Route exact path="/" component={Search} />
                    <Route path="/:repoOwner/:repoName" component={Repository} />
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
  }
}

export default App;
