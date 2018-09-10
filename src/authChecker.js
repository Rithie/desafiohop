import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import LogIn from "./pages/LogIn/LogIn";
import App from "./pages/App/App";

class AuthChecker extends React.Component {
    render() {
      if(isAuthenticated()){
        return (
          <Fragment>
            <Route path="/app" exact component={App} />
            <Route exact path="/" render={() => <Redirect to="/app" />} />
          </Fragment>
        )
      } else{
          return (
            <Fragment>
              <Route path="/" exact component={LogIn} />
              <Redirect to="/"  />
              </Fragment>
          )
        }
    }
  }

export default AuthChecker;