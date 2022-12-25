import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore, { history } from './redux-router/configureStore'

import 'semantic-ui-css/semantic.min.css'

// withTracker
//import withTracker from './withTracker';

// Main
import MainContainer from "./Main/MainContainer"

// System
import ListSystemsContainer from "./System/ListSystemsContainer"

// Call
import CallPlayerContainer from "./Call/CallPlayerContainer"

import AboutComponent from "./About/AboutComponent"


const store = configureStore(/* provide initial state if any */)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
  <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainContainer/>} />
          <Route exact path="/systems" element={<ListSystemsContainer/>} />
          <Route exact path="/system/:shortName" element={<CallPlayerContainer/>} />
          <Route exact path="/about" element={<AboutComponent/>} />

        </Routes>
        </BrowserRouter>
  </Provider>
)