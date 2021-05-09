import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux';

import history from './services/history';
import GlobalStyles from './GlobalStyle/GlobalStyles';
import Home from './pages/Home';
import Header from './Components/Header/';
import Store from './store/index'

function App() {

  return (
    <Provider store={Store}>
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Home />

        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
