import React from "react";

import Header from "../../components/header";
import Post from '../../components/post';

function PostDetails(props) {
  return (
    <>
      <Header />
      <Post postId={props.postId}/>
    </>
  );
}

export default PostDetails;
