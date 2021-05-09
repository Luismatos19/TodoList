import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './GlobalStyle/GlobalStyles';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Home />


    </BrowserRouter>
  );
}

export default App;
