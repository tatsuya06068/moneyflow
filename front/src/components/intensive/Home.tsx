import React from 'react'
import '../../layouts/App.sass'
import {Grid, Box, Typography} from '@material-ui/core'

function Home( ){
    return(
        <div>
            <Grid container justify="center">
                <Grid item sm={12} xs={12} lg={7}>
                    <Box border={3} borderColor='#FF6928'>
                        <Box textAlign="center" style={{ backgroundColor: '#FF6928', color: 'white', fontSize: '1.8em', fontWeight:'bold'}}>
                            <span>説明</span>
                        </Box>
                        <Box textAlign="left" > 
                            <dl>
                                <dt>・機能について</dt>
                                <dd>コメント</dd>
                            </dl>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default Home;