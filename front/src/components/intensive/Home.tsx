import React from 'react'
import '../../layouts/App.sass'
import {Grid, Box, Typography} from '@material-ui/core'
import homeimage from '../../image/home.jpg'

const imageStyle = {
    backgroundImage: `url(${homeimage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#464646',
    height: "95vh",
    margin: "-8px"

}

const fontStyle = {
    fontSize: "4em",
    fontStyle: 'メイリオ',
    'font-weight': 'bolder',
}



function Home( ){
    return(
        <div style={imageStyle} >
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100%'}}
            >  
                <Grid container justify="flex-start" style={{width:'70%'}}>  
                    <Grid item sm={12} xs={12} lg={12}>
                       <span style={fontStyle}>
                            MONEY
                        </span> 
                    </Grid>
                    <Grid item sm={12} xs={12} lg={12}>
                        <span style={fontStyle}>
                            FLOW
                        </span>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default Home;