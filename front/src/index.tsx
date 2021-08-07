import React from 'react';
import ReactDOM from 'react-dom'
import './layouts/index.sass'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux'
import  store from './stores/store'

ReactDOM.render(
  
    <Provider store={store}>
      <Auth0Provider
        domain="fuji6683.jp.auth0.com"
        clientId="OtoSqqVqGWGtriF59q3G0NJ4Rz1GKX6Q"
        redirectUri={window.location.origin}
        audience="https://moneyflowapi"
        scope="read:messages"
      >
        <App />
      </Auth0Provider>
    </Provider>,
  document.querySelector("#root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
