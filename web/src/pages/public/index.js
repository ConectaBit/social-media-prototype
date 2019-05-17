import React from "react";
import {Link} from 'react-router-dom'

function Public() {
  return <>Public Page
  <br />
  <Link to='/home'>Login</Link>
  <br />
  <Link to='/register'>Cadastro</Link>
  </>;
}

export default Public;
