import React from 'react';
import {Box, Input, Button, Flex} from '../../components/basics/styles'
import Header from '../../components/header'

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
          <Flex direction='row' justify='space-between'>
            <Button value='submit' type='submit'>Cadastrar</Button>
            <Button value='submit' type='submit' bg='#44BF76'>Login</Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Register;