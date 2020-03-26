import React, { Component } from "react";
import { DrizzleProvider } from "@drizzle/react-plugin";
import {LoadingContainer} from "@drizzle/react-components";
import { Router } from 'react-router';
// import { DrizzleProvider } from "drizzle-react";
// import {LoadingContainer} from "drizzle-react-components";

import "./App.css";
import drizzleOptions from "./drizzleOptions";
import MainContainer from "./MainContainer";
import store, {history} from "./store";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions} store={store}>
        <LoadingContainer>
            <Router history={history}>
              <Home/>
            </Router>
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
