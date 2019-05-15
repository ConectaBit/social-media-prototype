import React from "react";
import { Box } from "../basics/styles";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const CurrentUserQuery = gql`
  query {
    currentUser {
      id
      name
      photo
    }
  }
`;

function UserInfo() {
  return (
    <Query query={CurrentUserQuery}>
      {({ client, loading, data }) => {
        if (loading) {
          return <>Carregando...</>
        }

        if(data){
          const userName = data.currentUser.name;
          const userId = data.currentUser.id;
          return <>
                <span>Name: {userName}</span>
                <span>Id: {userId}</span>
                </>
        }
        return (
          <>
            <Box>UserInfo Component</Box>
          </>
        );
      }}
    </Query>
  );
}

export default UserInfo;
