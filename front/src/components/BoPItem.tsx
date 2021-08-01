import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import * as Const from '../common/Const'
import { selectBoPList, ResponseBoPDelete, ResponseBoPUpdate } from '../stores/slices/BoPSlice'
import {useAuth0} from '@auth0/auth0-react'
import {Button, Grid, Paper, Theme, makeStyles, createStyles} from '@material-ui/core'
import {BoPItem as BoPModel} from '../models/BoPModel'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import UpdateIcon from '@material-ui/icons/Update';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
    }),
);


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
    const [titleCheck, setTitleCheck] = useState(false);
    const [dateCheck, setDateCheck] = useState(false);
    const [totalMoneyCheck, setTotalMoneyCheck] = useState(false);
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

        if (title.length == 0) {
            setTitleCheck(true);
            return
        }
        else if(titleCheck){
            setTitleCheck(false);
        }

        if (date.length == 0) {
            setDateCheck(true);
            return
        }else if(dateCheck){
            setDateCheck(false)
        }

        if (totalMoney == 0) {
            setTotalMoneyCheck(true);
            return
        }else if(totalMoneyCheck){
            setTotalMoneyCheck(false)
        }
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

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    if(editFlg){
   return( 
       <>
            <Grid container justify="space-around" >
                <List className={classes.root}>
                    <Grid container justify="space-around">
                        <Grid item xs={12} sm={12} lg={6}>
                                    <ListItem alignItems="flex-start" >
                                        <ListItemText primary={<TextField 
                                                                    error={titleCheck}
                                                                    helperText={titleCheck? "必須項目です。" : ""}
                                                                    type="text" 
                                                                    name="edit_title"   
                                                                    id="edit_title"
                                                                    defaultValue={title}
                                                                    onChange={handleCahnge}
                                                                />}
                                            secondary={
                                                <Typography
                                                    component="span"
                                                >
                                                    <Grid container>
                                                        <Grid item sm={6} xs={12}>
                                                            { <TextField 
                                                                    type="date"
                                                                    name="edit_date" 
                                                                    error={dateCheck}
                                                                    helperText={dateCheck? "必須項目です。" : ""}
                                                                    defaultValue={date} 
                                                                    onChange={handleCahnge} 
                                                                /> }
                                                        </Grid>
                                                        <Grid item sm={6} xs={12}>
                                                            { 
                                                                <TextField 
                                                                    type="text" 
                                                                    name="edit_totalMoney"
                                                                    error = {totalMoneyCheck}
                                                                    helperText={totalMoneyCheck? "必須項目です。" : ""}
                                                                    defaultValue={totalMoney} 
                                                                    onChange={handleCahnge} 
                                                                />
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </Typography>
                                            }
                                        />
                                <Grid item >            
                                    <Grid container>
                                        <Grid item sm={12} xs={12}>
                                            <ButtonGroup
                                                orientation="vertical"
                                                aria-label="vertical contained primary button group"
                                                variant="text"
                                            >
                                                <Button onClick = {() => UpdateBoP(bop.id)}>
                                                   <UpdateIcon style={{ color: "00AA00"}} />
                                                    更新
                                                </Button>
                                                
                                                <Button onClick = {() => {setEditFlg(false)}}>
                                                    <SettingsBackupRestoreIcon style={{ color: "#FF00CC"}} />
                                                    戻る
                                                </Button>
                                            </ButtonGroup>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </ListItem>
                                <Divider />
                        </Grid>
                    </Grid> 
                </List>
            </Grid>

        </> 
    )}else{
        return( 
                <>
                    <Grid container justify="space-around" >
                        <List className={classes.root}>
                            <Grid container justify="space-around">
                                <Grid item xs={12} sm={12} lg={6}>
                                    <ListItem alignItems="flex-start" >
                                        <ListItemText primary={bop.title}
                                            secondary={
                                                <Typography
                                                    component="span"
                                                >
                                                    <Grid container>
                                                        <Grid item sm={6} xs={6}>
                                                            { bop.date }
                                                        </Grid>
                                                        <Grid item sm={6} xs={6}>
                                                            ￥{ bop.totalmoney }
                                                        </Grid>
                                                    </Grid>
                                                </Typography>
                                            }
                                        />
                                    <Grid item>
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <Grid container>
                                                    <ButtonGroup
                                                        orientation="vertical"
                                                        aria-label="vertical contained primary button group"
                                                        variant="text"
                                                    >
                                                        <Button onClick = {() => ChangeEdit(bop.title, bop.date.toString(), bop.totalmoney)}>
                                                            <EditIcon style={{ color: "#005FFF"}} />
                                                            編集
                                                        </Button>
                                                
                                                        <Button onClick = {() => DelBoP(bop.id)}>
                                                            <DeleteIcon style={{ color: "#FF00CC"}} />
                                                            削除
                                                        </Button>
                                                    </ButtonGroup>
                                                </Grid>
                                            </MenuItem>
                                        </Menu>
                                    </Grid>
                                </ListItem>
                            <Divider />
                            </Grid>
                            </Grid> 
                        </List>
                    </Grid>
                </>
        )
    }
}
export default BoPItem