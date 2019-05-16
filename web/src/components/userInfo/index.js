import React from "react";
import { Box, Flex } from "../basics/styles";

import { Query } from "react-apollo";
import gql from "graphql-tag";

function UserInfo() {
  const CurrentUserQuery = gql`
    query {
      currentUser {
        id
        name
        photo
      }
    }
  `;

  return (
    <Query query={CurrentUserQuery}>
      {({ client, loading, data }) => {
        if (loading) {
          return <>Carregando...</>;
        }

        if (data) {
          const userName = data.currentUser.name;
          return (
            <>
              <Box>
                <Flex direction="column">
                  <span>{userName}</span>
                </Flex>
              </Box>
            </>
          );
        }
      }}
    </Query>
  );
}

export default UserInfo;
