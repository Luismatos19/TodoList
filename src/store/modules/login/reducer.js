import * as types from "../types";

// set um state inicial para aplicação
const initialState = {
    isLoggedIn: false,
    tokken: false,
    user: {},
    isLoading: false,
};

// sempre que uma action for disparada e criado um novo state(nunca se deve alterar state inicial)
export default function (state = initialState, action) {
    switch (action.type) {
        //caso o login de sucesso o  global state recebe o token e user
        case types.LOGIN_SUCCESS: {
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            return newState;
        }

        //caso falhe reseta o form
        case types.LOGIN_FAILURE: {
            const newState = { ...initialState };
            return newState;
        }

        default: {
            return state;
        }
    }
}
