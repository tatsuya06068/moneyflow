import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import '../layouts/App.sass'
import { Button, Grid } from '@material-ui/core' 

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return !isAuthenticated ? (
    <Grid container justify="center" alignItems="center" >
      <Button size="large" style={{color: 'white', width: '8em', height: '3em', textAlign: 'center'}} onClick={loginWithRedirect}>Log in</Button>
    </Grid>
      ) : null;
}

export default LoginButton;