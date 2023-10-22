import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import "./index.css"
import App from './App';
import * as serviceWorker from './serviceWorker';
import { legacy_createStore as createStore} from 'redux'
import {Provider} from "react-redux";


const store = createStore(() => ({
    userStore: [
        {
            user:[],
            token: "token"
        }
    ]
}));

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          {console.log("token:"+store.token)}
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
