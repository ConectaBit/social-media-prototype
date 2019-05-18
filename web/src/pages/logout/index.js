import React from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  localStorage.clear();
  localStorage.setItem("access-token", "");

  function isAuth(){
    return localStorage.getItem('access-token') === '' ? false : true
  }

  function changeComponent(){
    if(isAuth()){
      return <>Saindo...</>
    }

    return <Redirect to='/public'/>
  }

  return (
    <>
      {changeComponent()}
    </>
  );
}

export default Logout;
