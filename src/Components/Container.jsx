import React, { Component } from "react";
import "../Css/style.css";
import { Route } from "react-router-dom";
import Login from "./Login";
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: Login,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="side-Content"></div>
        <div className="main-content">
          <div className="component-main">
            <Route
              path="/"
              render={(props) => <this.state.componentName {...props} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
