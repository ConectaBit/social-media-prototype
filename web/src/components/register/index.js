import React from 'react';
import {Box, Input, Button, Flex} from './styles'


function Register() {
    return (
      <Box direction='column'>
        <h1>Cadastro de Usuário</h1>
        <Flex direction='column'>
          <Input placeholder='Nome'/>
          <Input placeholder='Email' type='email' />
          <Input placeholder='Senha' type='password' />
          <Button value='submit' type='submit'>Cadastrar</ Button>
        </Flex>
      </Box>
    );
}

export default Register;