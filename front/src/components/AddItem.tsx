import React, { useState } from 'react'
import '../layouts/App.sass'
import '../common/Const'
import * as Const from '../common/Const'
import {ResponseBoPIns} from '../stores/slices/BoPSlice'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import {TextField, Button, Grid, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

    const getToday = () => {
        const dt = new Date();
        const y = dt.getFullYear();
        const m = ('00' + (dt.getMonth()+1)).slice(-2);
        const d = ('00' + dt.getDate()).slice(-2);
        return (y + '-' + m + '-' + d);
    }

    const onClickeSubmit = async() =>{
        const accessToken = await getAccessTokenSilently()
        dispatch(ResponseBoPIns({accessToken, title, date, totalMoney}))
    }

    return(
        <>
            <Accordion>
                <AccordionSummary 
                    expandIcon = {<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <strong>追加</strong>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                    <label>
                        <TextField type="text" label={Const.TITLE} name="title" onChange={handleCahnge}/>
                            <TextField  type="date"
                                name="date" 
                                label={Const.PURCHASE_DATE}
                                defaultValue={getToday()}
                                onChange={handleCahnge}
                            />
                            <TextField type = "text" label={Const.TOTALMONEY} name="totalMoney" onChange={handleCahnge}/>
                    </label>
                    </form>
                    <Button onClick={() => {
                        onClickeSubmit()
                    }}>追加</Button>
                </AccordionDetails>
            </Accordion>
        </> 
    );
}

export default AddItem;