import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import UserInfo from "../../components/userInfo";
import { Button } from "../../components/basics/styles";
import PostList from "../../components/postList";

function Feed() {
  return (
    <>
      <Header />
      <UserInfo />
      <Link to="/create">
        <Button>Criar Post</Button>
      </Link>
      <PostList />
    </>
  );
}

export default Feed;
