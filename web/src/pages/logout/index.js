import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  localStorage.clear();
  localStorage.setItem("access-token", "");

  return (
    <>
      <Link to="/login">Voltar</Link>
    </>
  );
}

export default Logout;
