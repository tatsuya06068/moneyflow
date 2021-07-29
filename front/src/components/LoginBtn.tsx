import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import '../layouts/App.sass'
import { Button, Grid } from '@material-ui/core' 

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return !isAuthenticated ? (
    <Grid container justify="center">
      <Button variant="contained" color="primary" style={{width: '56em', height: '3em', textAlign: 'center'}} onClick={loginWithRedirect}>Log in</Button>
    </Grid>
      ) : null;
}

export default LoginButton;