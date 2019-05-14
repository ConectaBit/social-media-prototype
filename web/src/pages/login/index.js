import React, { useState } from 'react';
import {Box, Input, Button, Flex} from '../../components/basics/styles'
import Header from '../../components/header'
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';

import { Mutation } from 'react-apollo';
import { InMemoryCache } from 'apollo-boost';

function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const CREATE_TOKEN = gql`
    mutation createToken($email: String!, $password: String!){
      createToken(email: $email, password: $password){
        token
      }
    }
  `;

  return(
    <Mutation mutation={CREATE_TOKEN}>
    {(createToken, {data, loading, error}) => {
      if(data){
        const token = data.createToken.token
        console.log(data)
        localStorage.setItem('access-token', token)
        return <>Deu certo | Token: {localStorage.getItem('access-token')}</>
      }

      if(loading){
        return <>Loading...</>
      }

      if(error){
        return <>Errrou</>
        console.log(error)
      }
   return <>
      <Header />
      <Box direction='column'>
        <h1>Login</h1>
        <Flex direction='column'>
          <form onSubmit={e => {
            createToken({
              variables: {
                email: email,
                password: pass
              }
            })
          }}>
          <Input placeholder='Email' type='email'   onChange={e => setEmail(e.target.value)}/>
          <Input placeholder='Senha' type='password'onChange={e => setPass(e.target.value)} />
          <Button value='submit' type='submit'>Entrar</Button>
            <NavLink to='/' replace>Cadastre-se</NavLink>
          </form>
        </Flex>
      </Box>
    </>
    }}
    </Mutation>

  );
}

export default Login;