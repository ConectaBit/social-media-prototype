import React from "react";
import { Box, Flex } from "../basics/styles";

import gql from "graphql-tag";
import { Query } from "react-apollo";

function Post(props) {
  const GET_POST = gql`
    query getPost($id: ID!) {
      post(id: $id) {
        id
        title
        content
      }
    }
  `;

  const getPostId = () => {
    return parseInt(props.postId.slice(3));
  };

  return (
    <Query query={GET_POST} variables={{ id: getPostId() }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <>Carregando...</>;
        }

        if (error) {
          console.log(error);
        }

        const postInfo = data.post;

        return (
          <Box key={postInfo.id}>
            <Flex direction="column">
              <h1>{postInfo.title}</h1>
              <p>{postInfo.content}</p>
              <p>{postInfo.photo}</p>
            </Flex>
          </Box>
        );
      }}
    </Query>
  );
}

export default Post;
