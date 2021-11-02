import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import { Server, Response } from 'miragejs'
import { mockData } from './mock'

// new Server({
//   routes() {
//     this.namespace = 'api'
//     this.post('/login', (schema, request) => {
//       let { email } = JSON.parse(request.requestBody)
//       if ((email + "").toLowerCase() === 'ciro@gmail.com') {
//         return mockData
//       } else {
//         return new Response(401, { some: 'header' }, { errors: ['email is not registered'] })
//       }
//     })
//   }
// })

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root')
);


