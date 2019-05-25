import React, { useState } from "react";
import { Box } from "../basics/styles";

import gql from "graphql-tag";
import { Query } from "react-apollo";

function CommentList(props) {
  const [comments, setComments] = useState([]);

  function receiveComments(cmt) {
    setComments(c => c.concat(cmt.commentsByPost));
  }

  const GET_COMMENT_BY_POST = gql`
    query GetComments($postId: ID!) {
      commentsByPost(postId: $postId) {
        comment
        id
      }
    }
  `;
  return (
    <Query query={GET_COMMENT_BY_POST} variables={{ postId: props.postId }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <>Loading...</>;
        }

        if (data) {
          data === undefined ? receiveComments(data) : console.log(comments);
        }
        return (
          <>
            <Box>

            </Box>
          </>
        );
      }}
    </Query>
  );
}

export default CommentList;
