import React, { Component } from "react";
import Home from "./Home";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import DisplayProductData from "./components/DisplayProductData";
import axios from "axios";
import { render } from "@testing-library/react";
import { Grid } from "semantic-ui-react";

class App extends Component {
  state = {
    authenticated: false,
  };

  toggleAuthenticatedState() {
    this.setState({ authenticated: !this.state.authenticated });
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>

        <Login
          toggleAuthenticatedState={() => this.toggleAuthenticatedState()}
        />
        <DisplayProductData />

        <Footer />
      </>
    );
  }
}
export default App;
