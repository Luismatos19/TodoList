import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import store from "./store";
import history from "./services/history";
import GlobalStyles from "./GlobalStyle/GlobalStyles";
import Header from "./Components/Header/";
import Routes from "./routes/index";

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalStyles />
                <Header />
                <Routes />

                <ToastContainer />
            </Router>
        </Provider>
    );
}

export default App;
