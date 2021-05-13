import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: "CONSUMO-API", //chave
            storage, // guarda no local storage
            whitelist: ["login"], //oque vc quer guarda
        },
        reducers
    );
    return persistedReducer;
};
