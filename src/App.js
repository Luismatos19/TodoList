import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify"; //manda janela com erros na tela
import { Provider } from "react-redux"; //guarda estado globalmente
import { PersistGate } from "redux-persist/integration/react"; //guarda os state no local storage

import store, { persistor } from "./store";
import history from "./services/history";

import GlobalStyles from "./GlobalStyle/GlobalStyles";
import Header from "./Components/Header/";
import Routes from "./routes/index";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <GlobalStyles />
                    <Header />
                    <Routes />

                    <ToastContainer />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
