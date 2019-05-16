import React from "react";
import styled from "styled-components";
import logo from "../header/logo.png";
import { Flex } from "../basics/styles";
import { Link } from "react-router-dom";

const Bar = styled.header`
  height: 5rem;
  width: 100%;
  box-shadow: 0px 6px 4px -4px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 5rem;
    align-self: center;
  }

  span {
    margin: auto 1em;
  }
`;

function Header() {
  return (
    <Bar>
      <Flex>
        <img src={logo} alt="logo" />
        <Link to="/logout">Sair</Link>
      </Flex>
    </Bar>
  );
}
export default Header;
