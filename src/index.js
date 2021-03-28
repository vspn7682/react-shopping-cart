import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { transitions, positions, types, Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter as Router } from 'react-router-dom'
import { StateProvider } from './Context/Context'
import { reducer, initialState } from './Context/reducer'

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  type: types.ERROR,
  timeout: 5000,
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateProvider reducer={reducer} initialState={initialState}>
        <Provider template={AlertTemplate} {...options}>
          <App />
        </Provider>
      </StateProvider>
    </Router>
  </React.StrictMode >
  ,
  document.getElementById('root')
);

