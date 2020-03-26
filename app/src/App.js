import React, { Component } from "react";
import { DrizzleProvider } from "@drizzle/react-plugin";
import {LoadingContainer} from "@drizzle/react-components";
// import { Router } from 'react-router';
// import { DrizzleProvider } from "drizzle-react";
// import {LoadingContainer} from "drizzle-react-components";


import drizzleOptions from "./drizzleOptions";
import MainContainer from "./MainContainer";
// import store, {history} from "./store";
// import Home from "./Home";

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions} >
        <LoadingContainer>
            <MainContainer/>
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
