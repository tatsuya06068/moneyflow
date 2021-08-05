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
      <Button
        variant="outline-primary"
        style={{color: 'white', fontSize: '1.2em'}}
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
        {...props}
      >
        Log out
      </Button>

  ) : null;
}

export default LogoutButton;