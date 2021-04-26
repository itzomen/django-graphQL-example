import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "../header/header.component" 

import "../../common/styles"
// detects the index.ts file in styles and import automatically
import './app.component.css'

import Home from "../../pages/home/home.page"
import About from "../../pages/about/about.page"

import { ApolloProvider } from "@apollo/client";
import client from "../../common/apollo-client";


const App: React.FC = () => {
    return(
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Switch>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App