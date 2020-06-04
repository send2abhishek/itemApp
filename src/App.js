import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from "./Components/Container";
import HomePage from "./Components/hompage";
import AdminPage from "./Components/adminPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={(props) => <Container {...props} />} />
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/admin/home" exact component={AdminPage}></Route>
          <Route path="*" render={(props) => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
