import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import './layouts/App.sass'
import Header from './components/intensive/Header'
import Home from './components/intensive/Home'
import List from './components/intensive/MoneyFlowList'
import { ProtectedRoute } from "./routers/ProtectedRoute"
import ReactDOM from "react-dom"
import { useAuth0 } from "@auth0/auth0-react"

const App: React.FC = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <p>Now lodinig</p>;
  }
  return (
    <div className="App">
      
      <header className="header">
        <Header />
      </header>

      <Router>
        <Switch>
          <main className="main">
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/list" component={List} />
          </main>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
