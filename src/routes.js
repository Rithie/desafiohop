import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthChecker from "./authChecker";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" exact component={AuthChecker} />
        <Route path="/app" exact component={AuthChecker} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;