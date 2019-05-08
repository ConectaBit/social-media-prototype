import React from 'react';
import {Box, Input, Button, Flex} from '../../components/basics/styles'
import Header from '../../components/header'
import { NavLink } from 'react-router-dom';

function Login() {
  return(
    <>
      <Header />
      <Box direction='column'>
        <h1>Login</h1>
        <Flex direction='column'>
          <Input placeholder='Email' type='email' />
          <Input placeholder='Senha' type='password' />
          <Flex direction='column' align='center'>
            <Button value='submit' type='submit'>Entrar</Button>
            <NavLink to='/' replace>Cadastre-se</NavLink>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Login;