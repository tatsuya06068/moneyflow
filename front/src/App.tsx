import React from 'react'
import { Route, BrowserRouter as Router, Switch} from "react-router-dom"
import './layouts/App.sass'
import Header from './components/intensive/Header'
import Home from './components/intensive/Home'
import List from './components/intensive/MoneyFlowList'
import { ProtectedRoute } from "./routers/ProtectedRoute"
import { useAuth0 } from "@auth0/auth0-react"
import {CircularProgress, Grid} from '@material-ui/core'

const App: React.FC = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
        <Grid item>
          <CircularProgress size="9rem" />
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
