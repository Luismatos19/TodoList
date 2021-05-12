import { createStore } from "redux";

//import todos os reducers
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer);

export default store;
