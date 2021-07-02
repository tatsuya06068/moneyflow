import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import '../layouts/App.sass'
import '../common/LoginAxios'
import { BoPList, responsBoP } from '../stores/slices/BoPSlice'
import {useDispatch} from 'react-redux'

function LogoutButton(props: any) {
  const dispatch = useDispatch();
  const { isAuthenticated, logout, getAccessTokenSilently } = useAuth0();
  const {user} = useAuth0()

    async function getToken() {
      const response = await getAccessTokenSilently()
      .then((accessToken) => {
        dispatch(BoPList({accessToken}))
      })
    } 

    return isAuthenticated ? (
    <div>
      <button
        variant="outline-primary"
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
        {...props}
      >
        Log out
      </button>
      {console.log(user)}
      {user?.name}
      <button onClick={() => {
        //const token = getToken();
        getToken()
      }}>api</button>
    </div>

  ) : null;
}

export default LogoutButton;