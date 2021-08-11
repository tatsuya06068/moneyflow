import React, {useState} from 'react'
import {useLocation} from 'react-router'
import '../../layouts/App.sass'
import Login from '../LoginBtn'
import Logout from '../LogoutBtn'
import {Grid, AppBar, Tabs, Tab } from '@material-ui/core'
import { Link } from 'react-router-dom' 

function Header(props: any){
    const location = useLocation()

    const getPath = () => {
        return location.pathname === "/"  ? 0 : 1 
    }

    const [value, setValue] = useState(getPath());

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };  

    return(
        <div>
            <AppBar title="Money Flow" position="static" style={{backgroundColor: "#00AA00", fontSize: '1rem'}}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs = {12} sm={12} lg={12}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={7} sm={8} lg={9}>
                                <h1>
                                        Money Frow
                                </h1>
                            </Grid>
                            <Grid item xs={1} sm={3} lg={1} style={{marginTop: '1em'}}>
                                <Logout />
                                <Login />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Tabs 
                        value={value} 
                        onChange={handleChange} 
                        indicatorColor="primary"
                        centered
                        variant="fullWidth"    
                    >
                        <Tab label="ホーム" component={Link} to="/" />
                        <Tab label="一覧"  component={Link} to="/list" />
                    </Tabs>
                </Grid>
            </AppBar>
        </div>
    )
}
export default Header;