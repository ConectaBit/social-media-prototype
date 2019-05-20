import React, { useState, useReducer } from "react";
import { Box, Flex, Button } from "../basics/styles";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

function PostList() {
  const [posts, setPosts] = useState([]);
  const [count, dispatch] = useReducer(reducer, initialState);

  const POST_LIST = gql`
    query GetPosts($first: Int!, $offset: Int!){
      posts(first: $first, offset: $offset) {
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
      <Query query={POST_LIST} variables={{first: 10, offset: count * 10}}>
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

          return posts.map(posts => (
            <Box key={posts.id}>
              <Flex direction="column">
                <h1>{posts.title}</h1>
                <h3>{posts.content}</h3>
                <span>Autor: {posts.author.name}</span>
                <span>Updatad at: {posts.updatedAt}</span>
              </Flex>
            </Box>
          ));
        }}
      </Query>

      <Button onClick={() => dispatch('decrement')}>Anterior</Button>
      {}
      <Button onClick={() => dispatch('increment')}>Próximo</Button>
    </>
  );
}

export default PostList;
