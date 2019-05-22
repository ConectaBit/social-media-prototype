import React, { useState } from "react";
import { Button, Input, Flex } from "../basics/styles";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_COMMENT = gql`
  mutation createComment($comment: String!, $post: Int!) {
    createComment(input: { comment: $comment, post: $post }) {
      id
      comment
      createdAt
      user{
          name
      }
      post{
          id
      }
    }
  }
`;

function Comment(postId) {
  const [comment, setComment] = useState("");
  return (
    <Mutation mutation={CREATE_COMMENT}>
      {(createComment, { data, loading, error }) => {
          if(loading){
              return <>Loading...</>
          }

          if(error){
              throw new Error(error)
          }

          if(data){
            //notificação
          }
        return (
          <form onSubmit={ e => {
              createComment({
                  variables: {
                      comment: comment,
                      post: postId.postId
                  }
              })
          }}>
            <Flex direction="column">
              <Input
                type="textarea"
                placeholder="Escreva um comentário"
                onChange={e => setComment(e.target.value)}
              />
              <Button>Enviar</Button>
            </Flex>
          </form>
        );
      }}
    </Mutation>
  );
}

export default Comment;
