import { useAuth0 } from '@auth0/auth0-react'
import { ResponseBoPDelete } from '../stores/slices/BoPSlice'
import { useDispatch } from 'react-redux'

const DelBoP = (id: number) =>{
    const {getAccessTokenSilently} = useAuth0();
    const dispatch = useDispatch();
    async function delBoP(){
        await getAccessTokenSilently()
        .then((accessToken) => {
        dispatch(ResponseBoPDelete({accessToken, id}))
    })
    }
    delBoP();
}
export default DelBoP;