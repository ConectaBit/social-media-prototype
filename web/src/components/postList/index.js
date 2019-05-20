import React, { useState } from "react";
import { Box, Flex } from "../basics/styles";

import gql from "graphql-tag";
import { Query } from "react-apollo";

function PostList() {
  const [posts, setPosts] = useState([]);

  const POST_LIST = gql`
    query {
      posts(first: 30, offset: 0) {
        id
        title
        content
        photo
        updatedAt
        author {
          name
        }
      }
    }
  `;

  return (
    <>
      <Query query={POST_LIST}>
        {({ loading, error, data }) => {
          if (loading) {
            return <>Loading...</>;
          }
          if (error) {
            console.log(error);
          }

          if (data) {
            console.log(data);
            setPosts(data.posts);
          }

          return (
            posts.map((posts) => (<Box key={posts.id}>
                <Flex direction='column'>
                    <h1>{posts.title}</h1>
                    <h3>{posts.content}</h3>
                    <span>Autor: {posts.author.name}</span>
                    <span>Updatad at: {posts.updatedAt}</span>
                </Flex>
            </Box>))
          );
        }}
      </Query>
    </>
  );
}

export default PostList;
