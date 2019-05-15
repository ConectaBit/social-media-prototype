import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";
import Feed from './pages/feed';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/feed" component={Feed} />
        <Route exat={true} path="/" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
