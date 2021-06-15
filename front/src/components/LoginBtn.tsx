import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import '../layouts/App.sass'
import LoginAxios from "../common/LoginAxios";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (isAuthenticated) LoginAxios();
  return !isAuthenticated ? (
    <button onClick={loginWithRedirect}>Log in</button>

  ) : null;
}

export default LoginButton;