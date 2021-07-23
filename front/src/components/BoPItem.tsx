import React from 'react'
import {BoPItem as BoPModel} from '../models/BoPModel'
import { useDispatch, useSelector} from 'react-redux'
import { selectBoPList, ResponseBoPDelete, ResponseBoPUpdate } from '../stores/slices/BoPSlice'
import {useAuth0} from '@auth0/auth0-react'
//import {Button, List, ListItem, ListItemText} from '@material-ui/core'


type Props = {
    bop: BoPModel
}

const { useState } = React;

const BoPItem : React.FC<Props> = ({ bop }) => {
    const dispatch = useDispatch()
    const {getAccessTokenSilently} = useAuth0(); 

    const [editFlg, setEditFlg] = useState(false);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [totalMoney, setTotalMoney]= useState(0);

    const handleCahnge = (event: any) => {
        switch (event.target.name){
            case 'edit_title' :
                setTitle(event.target.value)
                console.log(title)
                break
            case 'edit_date' :
                setDate(event.target.value)
                break
            case 'edit_totalMoney':
                setTotalMoney(event.target.value)
                break
        }
    }

    const DelBoP = (id: number) => {
        async function bopDel(id: number){
           await getAccessTokenSilently()
           .then((accessToken) => {             
                dispatch(ResponseBoPDelete({accessToken, id}))
           })        
        }
        bopDel(id);
    }

    const UpdateBoP = (id: number) => {
        async function bopUpdate(id: number) {
            await getAccessTokenSilently()
            .then((accessToken) => {
                dispatch(ResponseBoPUpdate({accessToken, id, title, date, totalMoney}))
            })
        }
        bopUpdate(id)
        setEditFlg(false)
    }

    const ChangeEdit = (title: string, date: string, totalMoney: number) => {
        setTitle(title)
        setDate(date)
        setTotalMoney(totalMoney)
        setEditFlg(true)
    }

    if(editFlg){
   return( 
       <>
         <li>
                <form>
                    <label>
                        <input type="text" name="edit_title" id="edit_title" defaultValue={title} onChange={handleCahnge} />
                        <input type="date" name="edit_date" defaultValue={date} onChange={handleCahnge} />
                        <input type="text" name="edit_totalMoney"defaultValue={totalMoney} onChange={handleCahnge} />
                    </label>
                </form>
                <button onClick = {() => UpdateBoP(bop.id)}>更新</button>
                <button onClick = {() => {setEditFlg(false)}}>戻る</button>
            </li>
        </> 
    )}else{
        return(
            <>
                <li>
                    <label>
                        <span>{ bop.title }</span>
                        <span>{ bop.date }</span>
                        <span>{ bop.totalmoney }</span>
                    </label>
                <button onClick = {() => DelBoP(bop.id)}>削除</button>    
                <button onClick = {() => ChangeEdit(bop.title, bop.date.toString(), bop.totalmoney)}>編集</button>
            </li>

            </>
        )
    }
}
export default BoPItem