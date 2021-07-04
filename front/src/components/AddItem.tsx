import React, { useState } from 'react'
import '../layouts/App.sass'
import '../common/Const'
import * as Const from '../common/Const'
import {ResponseBoPIns} from '../stores/slices/BoPSlice'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'

const AddItem: React.FC = () => {
    
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [totalMoney, setTotalMoney]= useState("");
    const {getAccessTokenSilently} = useAuth0(); 
    const dispatch = useDispatch();

    const handleCahnge = (event: any) => {
        switch (event.target.name){
            case 'title':
                console.log(title)
                setTitle(event.target.value)
                break
            case 'date' :
                setDate(event.target.value)
                console.log(date)
                break
            case 'totalMoney':
                setTotalMoney(event.target.value)
                console.log(totalMoney)
                break
        }
    }

    const onClickeSubmit = async() =>{
        const accessToken = await getAccessTokenSilently()
        dispatch(ResponseBoPIns({accessToken, title, date, totalMoney}))
    }

    return(
        <div className= 'inner'>
            <form>
                <label>
                    {Const.TITLE}:
                    <input type="text" name="title" onChange={handleCahnge}/>
                    {Const.PURCHASE_DATE}
                    <input type = "date" name="date" onChange={handleCahnge}/>
                    {Const.TOTALMONEY}
                    <input type = "text" name="totalMoney" onChange={handleCahnge}/>
                </label>
            </form>
            <button onClick={() => {
                        onClickeSubmit()
                    }}>追加</button>
        </div> 
    );
}

export default AddItem;