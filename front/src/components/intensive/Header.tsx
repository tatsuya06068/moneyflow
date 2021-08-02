import React, {useState} from 'react'
import '../../layouts/App.sass'
import {useAuth0} from '@auth0/auth0-react'
import Login from '../LoginBtn'
import Logout from '../LogoutBtn'
import {Grid, Box, AppBar, Tabs, Tab, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom' 

function Header(props: any){
    const { isAuthenticated, logout } = useAuth0();
    const {user} = useAuth0();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  console.log(value);
    return(
        <div>
                <AppBar title="Money Flow" position="static" style={{backgroundColor: "#00AA00", fontSize: '1rem'}}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={8}>
                            <Box height={35}><h1>Money Frow</h1></Box>
                        </Grid>
                        <Grid item xs={3} sm={3} lg={3}>
                            <Logout />
                            <Login />
                        </Grid>
                        <Tabs value={value} onChange={handleChange} >
                            <Tab label="ホーム" component={Link} to="/" />
                            <Tab label="一覧"  component={Link} to="/list" />
                        </Tabs>
                    </Grid>
                </AppBar>
        </div>
    )
}
export default Header;