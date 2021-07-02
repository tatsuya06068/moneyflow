import axios from 'axios'
import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// /api/privateへのリクエスト
function LoginAxios() {
  const { user, getAccessTokenSilently} = useAuth0();
  const myHeaders = new Headers();
  //myHeaders.set('Authorization', 'Bearer ' + accessToken) 
 // alert(accessToken)
    useEffect(

      () => {
        const f = async() => {
        const accessToken = await getAccessTokenSilently();
        console.log (accessToken)
        axios.get("http://localhost:3000/api/private", { headers: {
            Authorization: "Bearer " + accessToken
            },
            })
        .then((res) => {
          console.log(res)
          return res;
        })
        .catch((err) => {
          console.log(err);
          alert(err)
        });
      }
      f();
      });
}
export default LoginAxios;