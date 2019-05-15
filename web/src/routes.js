import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";
import Feed from "./pages/feed";

function isAuth() {
  return localStorage.getItem("access-token") ? true : false;
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={isAuth() ? Feed : Register} />
        <Route path="/feed" component={Feed} />
        <Route exat={true} path="/" component={isAuth() ? Feed : Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
