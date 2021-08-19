import React from 'react'
import '../../layouts/App.sass'
import {Grid} from '@material-ui/core'
import homeimage from '../../image/home.jpg'

const imageStyle = {
    backgroundImage: `url(${homeimage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
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
        <>
        <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
        <div style={imageStyle} >
            <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={{ minHeight: '100%'}}
            >  
                <Grid container justify="flex-start" style={{width:'80%'}}>  
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
        </Grid>
        </Grid>
        </>
    )
}
export default Home;