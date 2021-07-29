import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import './layouts/App.sass'
import Header from './components/intensive/Header'
import Home from './components/intensive/Home'
import List from './components/intensive/MoneyFlowList'
import { ProtectedRoute } from "./routers/ProtectedRoute"
import ReactDOM from "react-dom"
import { useAuth0 } from "@auth0/auth0-react"
import {CircularProgress, Grid, GridSpacing} from '@material-ui/core'

const App: React.FC = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <Grid container justify="center" >
        <Grid item xs={8}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }
  return (
    <div>
      
      <Grid container spacing={2}>
        <Router>
          <Grid container direction="column">
            <Grid item sm={12} xs={12} lg={12}>
                <Header />
              </Grid>
            </Grid>
          <Switch>
            <Grid item sm={12} xs={12} lg={12}>
              <Route path="/" exact component={Home} />
              <ProtectedRoute path="/list" exact component={List} />
            </Grid>
          </Switch>
        </Router>
      </Grid>

    </div>
  );
}

export default App;
