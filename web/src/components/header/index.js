import React, { useState } from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import styled from "styled-components";
import logo from "../header/logo.png";

const Bar = styled.header`
  height: 5rem;
  width: 100%;
  box-shadow: 0px 6px 4px -4px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  flex-direction: row;
  justify-content: space-between;

  img {
    height: 5rem;
    align-self: center;
  }

  span {
    margin: auto 1em;
  }
`;

function Header() {
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState("");

  function userFetch() {
    const token = localStorage.getItem("access-token");
  }

  const CURRENT_USER = gql`
    query currentUser {
      currentUser {
        id
        name
        photo
      }
    }
  `;

  return (
    <Query query={CURRENT_USER}>
      {({ loading, error, data }) => {
        return (
          <Bar>
            <img src={logo} />
            <div>
              <span>{userName}</span>
              <span>{userPhoto}</span>
            </div>
          </Bar>
        );
      }}
    </Query>
  );
}
export default Header;
