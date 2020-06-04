import React, { Component } from "react";
import Header from "./header";
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        Admin Page
      </div>
    );
  }
}

export default AdminPage;
