import React from 'react'
import {BoPItem as BoPModel} from '../models/BoPModel'
import { useDispatch, useSelector} from 'react-redux'
import { selectBoPList, ResponseBoPDelete } from '../stores/slices/BoPSlice'
import {useAuth0} from '@auth0/auth0-react'
import { access } from 'fs'

type Props = {
    bop: BoPModel
}

const BoPItem : React.FC<Props> = ({ bop }) => {
    const dispatch = useDispatch()
    const {getAccessTokenSilently} = useAuth0(); 


    const DelBoP = (id: number) => {
        async function bopDel(id: number){
           await getAccessTokenSilently()
           .then((accessToken) => {             
                dispatch(ResponseBoPDelete({accessToken, id}))
           })        
        }
        bopDel(id);
    }

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