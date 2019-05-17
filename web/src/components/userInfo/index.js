import React, { useState } from "react";
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

  const [userName, setUsername] = useState("");
  const [userPhoto, setUserPhoto] = useState("");

  return (
    <Query query={CurrentUserQuery}>
      {({ client, loading, data }) => {
        if (loading) {
          return <>Carregando...</>;
        }

        if (data) {
          setUsername(data.currentUser.name);
          setUserPhoto(data.currentUser.photo);
          return (
            <>
              <Box>
                <Flex direction="column">
                  <span>{userName}</span>
                  <span>{userPhoto ? userPhoto : "sem foto de perfil"}</span>
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
