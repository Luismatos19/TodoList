import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'


import history from './services/history';
import GlobalStyles from './GlobalStyle/GlobalStyles';
import Home from './pages/Home';
import Header from './Components/Header/';


function App() {

  return (

    <Router history={history}>
      <GlobalStyles />
      <Header />
      <Home />

      <ToastContainer />
    </Router>

  );
}

export default App;
