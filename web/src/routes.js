import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";
import Logout from './pages/logout'
import Feed from "./pages/feed";

const isAuth = localStorage.getItem("access-token") ? true : false;

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/register' render={() => (
          isAuth
          ? (<Redirect to='/feed/'/>)
          : (<Register />)
        )}/>
        
        <Route path="/feed/" component={isAuth ? Feed : Login} />
        
        <Route path='/logout' component={Logout}/>
        
        <Route exat={true} path="/" render={() => (
          isAuth
          ? (<Redirect to='feed'/>)
          : (<Login />)
        )} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
