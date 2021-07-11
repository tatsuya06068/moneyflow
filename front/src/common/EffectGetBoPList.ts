import {useEffect} from 'react'
import { useAuth0} from '@auth0/auth0-react'
import { ResponseBoPList} from '../stores/slices/BoPSlice'
import { useDispatch } from 'react-redux'

const EffectGetBoPList = () => {
    const {getAccessTokenSilently} = useAuth0();
    const dispatch = useDispatch(); 
    async function getToken() {
        await getAccessTokenSilently()
        .then((accessToken) => {
      dispatch(ResponseBoPList({accessToken}))
      })
}
getToken();
}
export default EffectGetBoPList;