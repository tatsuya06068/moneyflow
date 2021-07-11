import React from 'react'
import {BoPItem as BoPModel} from '../models/BoPModel'
import { useDispatch, useSelector} from 'react-redux'
import { selectBoPList } from '../stores/slices/BoPSlice'

type Props = {
    bop: BoPModel
}
const BoPItem : React.FC<Props> = ({ bop }) => {
   const dispatch = useDispatch()
    
   return( 
        <li>
            <label>
                <span>{ bop.title }</span>
                <span>{ bop.date }</span>
                <span>{ bop.totalmoney }</span>
            </label>
        </li>
    )
}
export default BoPItem