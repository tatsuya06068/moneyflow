import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import '../layouts/App.sass'
import '../common/LoginAxios'
import { ResponseBoPList} from '../stores/slices/BoPSlice'
import {useDispatch} from 'react-redux'
import { Button, Grid } from "@material-ui/core"

function LogoutButton(props: any) {
  const { isAuthenticated, logout } = useAuth0();
  const {user} = useAuth0()

    return isAuthenticated ? (
    <Grid container justify="center">
      <Button
        variant="outline-primary"
         style={{width: '56em', height: '3em', textAlign: 'center'}}
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
        {...props}
      >
        Log out
      </Button>
    </Grid>

  ) : null;
}

export default LogoutButton;