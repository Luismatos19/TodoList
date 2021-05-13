// combina todos os reducer para ser usado depois
import { combineReducers } from "redux";

import login from "./login/reducer";

export default combineReducers({
    login,
});
