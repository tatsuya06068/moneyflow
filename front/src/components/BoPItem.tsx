import React from 'react'
import {BoPItem as BoPModel} from '../models/BoPModel'
import { useDispatch, useSelector} from 'react-redux'
import { selectBoPList, ResponseBoPDelete } from '../stores/slices/BoPSlice'
import {useAuth0} from '@auth0/auth0-react'

type Props = {
    bop: BoPModel
}

const Token = (): string => {
    const {getAccessTokenSilently} = useAuth0();
    async function getToken(){
        await getAccessTokenSilently()      
    }
     const token = getToken();
     return String(token);
}

const DelBoP = (id: number) => {
    const dispatch = useDispatch()
    const accessToken = Token();
    dispatch(ResponseBoPDelete({accessToken, id}))
}

const BoPItem : React.FC<Props> = ({ bop }) => {
    
   return( 
        <li>
            <label>
                <span>{ bop.title }</span>
                <span>{ bop.date }</span>
                <span>{ bop.totalmoney }</span>
                <button onClick={() => DelBoP(bop.id)}>削除</button>
            </label>
        </li>
    )
}
export default BoPItem