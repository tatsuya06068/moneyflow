import React, { useState } from 'react'
import '../layouts/App.sass'
import '../common/Const'
import * as Const from '../common/Const'
import {ResponseBoPIns} from '../stores/slices/BoPSlice'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import {TextField, Button, Grid, Accordion, AccordionDetails, AccordionSummary, AccordionActions, Divider} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AddItem: React.FC = () => {
    
    
    const [titleCheck, setTitleCheck] = useState(false);
    const [dateCheck, setDateCheck] = useState(false);
    const [totalMoneyCheck, setTotalMoneyCheck] = useState(false);
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
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(getToday());
    const [totalMoney, setTotalMoney]= useState("");

    const onClickeSubmit = async() =>{
        const accessToken = await getAccessTokenSilently()
        if (title.length === 0) {
            setTitleCheck(true);
            return
        }
        else if(titleCheck){
            setTitleCheck(false);
        }

        if (date.length === 0) {
            setDateCheck(true);
            return
        }else if(dateCheck){
            setDateCheck(false)
        }

        if (totalMoney.length === 0) {
            setTotalMoneyCheck(true);
            return
        }else if(totalMoneyCheck){
            setTotalMoneyCheck(false)
        }

        dispatch(ResponseBoPIns({accessToken, title, date, totalMoney}))
    }

    return(
        <>
            <Grid item xs={12} sm={12} lg={12}>
                <Accordion>
                    <AccordionSummary 
                        expandIcon = {<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >   
                        <strong>追加</strong>
                    </AccordionSummary>
                    <Grid container justify="center">
                        <AccordionDetails>
                            <Grid container justify="center" spacing={2}>
                                <Grid item sm={12} xs={12} lg={4}>
                                    <TextField type="text"
                                        error={titleCheck}
                                        helperText={titleCheck? "必須項目です。" : ""}
                                        label={Const.TITLE} 
                                        fullWidth name="title" 
                                        onChange={handleCahnge}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} lg={4}>
                                    <TextField type="date"
                                        error={dateCheck}
                                        helperText={dateCheck? "必須項目です。" : ""}
                                        name="date" 
                                        label={Const.PURCHASE_DATE}
                                        fullWidth
                                        defaultValue={getToday()}
                                        onChange={handleCahnge}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} lg={4}>
                                    <TextField 
                                        type= "number"
                                        error = {totalMoneyCheck}
                                        helperText={totalMoneyCheck? "必須項目です。" : ""}
                                        label={Const.TOTALMONEY} 
                                        fullWidth 
                                        inputProps={{max:"100000000",step: "100"}}
                                        name="totalMoney"
                                        onChange={handleCahnge}
                                    />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                        </Grid>
                        
                        <Divider />

                        <Grid container justify="space-around">
                            <AccordionActions>
                                <Grid item sm={12} xs={12} lg={12}>
                                    <Button 
                                    variant="outlined" 
                                    color="primary" 
                                    size="large"
                                    onClick={() => {
                                    onClickeSubmit()
                                    }}>
                                    追加
                                    </Button>
                                </Grid>
                        </AccordionActions>
                        </Grid>
                </Accordion>
            </Grid>
        </> 
    );
}

export default AddItem;