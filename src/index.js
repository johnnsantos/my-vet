import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import { Server, Response } from 'miragejs'
import { mockData } from './mock'
import ScriptTag from 'react-script-tag';
import intercom from './assets/js/intercom.js'

new Server({
  routes() {
    this.namespace = 'api'

    this.post('/login', (schema, request) => {
      let { email } = JSON.parse(request.requestBody)
      if ((email+"").toLowerCase() === 'ciro@gmail.com') {
        return mockData
      } else {
        return new Response(401, { some: 'header' }, { errors: ['email is not registered'] })
      }
    })
    
    if( localStorage.hasOwnProperty('userInfo') ){
      let { userInfo } = JSON.parse(localStorage.getItem('userInfo'))
      if( userInfo) {
          let settings = {
          app_id: 'avzy2hbm',
          name: userInfo.username,
          email: userInfo.email,
          user_id: userInfo.id,
          }
          
          window.intercomSettings = settings
          window.Intercom('update');
      }
    }
  }
})

ReactDOM.render(
  <>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  <ScriptTag type="text/javascript" src={intercom} />
  </>,
  document.getElementById('root')
);


