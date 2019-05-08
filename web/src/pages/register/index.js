import React from 'react';
import {Box, Input, Button, Flex} from '../../components/basics/styles'
import Header from '../../components/header'
import { NavLink } from 'react-router-dom';

function Register() {
  return(
    <>
      <Header />
      <Box direction='column'>
        <h1>Cadastro de Usuário</h1>
        <Flex direction='column'>
          <Input placeholder='Nome'/>
          <Input placeholder='Email' type='email' />
          <Input placeholder='Senha' type='password' />
          <Flex direction='column' align='center'>
            <Button value='submit' type='submit'>Cadastrar</Button>
            <NavLink to='/login/' replace>Já está cadastrado?</NavLink>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Register;