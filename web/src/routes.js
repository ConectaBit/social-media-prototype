import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuth } from "../src/utils";

import Register from "./pages/register";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Feed from "./pages/feed";
import Public from "./pages/public";
import CreatePost from "./pages/createPost";
import PostDetails from "./pages/postDetails";

function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/register"
          render={() => (isAuth() ? <Redirect to="/home/" /> : <Register />)}
        />

        <Route path="/home" render={() => (isAuth() ? <Feed /> : <Login />)} />
        <Route path="/logout" component={Logout} />
        <Route path="/create" component={CreatePost} />
        <Route
          path="/post/:id"
          render={props =>
            isAuth() ? (
              <PostDetails postId={props.match.params.id} />
            ) : (
              <Redirect to="/register" />
            )
          }
        />
        <Route
          exat={true}
          path="/"
          render={() => (isAuth() ? <Redirect to="home" /> : <Public />)}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
