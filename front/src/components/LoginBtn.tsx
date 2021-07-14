import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import '../layouts/App.sass'
import { Button } from '@material-ui/core' 

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  //if (isAuthenticated) LoginAxios();
  return !isAuthenticated ? (
    <Button variant="contained" color="primary" onClick={loginWithRedirect}>Log in</Button>

  ) : null;
}

export default LoginButton;