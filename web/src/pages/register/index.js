import React, { useState } from "react";
import { Box, Input, Button, Flex } from "../../components/basics/styles";
import { NavLink } from "react-router-dom";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CREATE_USER = gql`
    mutation createUser($name: String!, $email: String!, $password: String!) {
      createUser(input: { name: $name, email: $email, password: $password }) {
        id
      }
    }
  `;

  return (
    <Mutation mutation={CREATE_USER}>
      {(createUser, { data, loading, error }) => {
        if (loading) {
          return loading;
        }

        if (data) {
          return (
            <h1>
              Cadastrado{" "}
              <NavLink to="/login" replace>
                Login
              </NavLink>
            </h1>
          );
        }

        if (error) {
          return <h1>Deu pau</h1>;
        }
        return (
          <>
            <Box direction="column">
              <h1>Cadastro de Usuário</h1>
              <Flex direction="column">
                <form
                  onSubmit={e => {
                    createUser({
                      variables: {
                        name: name,
                        email: email,
                        password: password
                      }
                    });
                  }}
                >
                  <Input
                    disabled={loading}
                    placeholder="Nome"
                    required
                    onChange={e => setName(e.target.value)}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Senha"
                    type="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Flex direction="column" align="center">
                    <Button value="submit" type="submit">
                      Cadastrar
                    </Button>
                    <NavLink to="/login" replace>
                      Já está cadastrado?
                    </NavLink>
                  </Flex>
                </form>
              </Flex>
            </Box>
          </>
        );
      }}
    </Mutation>
  );
}

export default Register;
