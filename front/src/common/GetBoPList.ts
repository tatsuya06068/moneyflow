import { useAuth0} from '@auth0/auth0-react'
import { ResponseBoPList} from '../stores/slices/BoPSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';

const GetBoPList = () => {
  useEffect(
    () => {
      const {getAccessTokenSilently} = useAuth0();
      const dispatch = useDispatch();
  
      async function getBoPList() {
        await getAccessTokenSilently()
        .then((accessToken) => {
          dispatch(ResponseBoPList({accessToken}))
        })
      }
      getBoPList();
    }, []);
}

export default GetBoPList;