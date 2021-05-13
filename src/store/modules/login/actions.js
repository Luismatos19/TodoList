//actions dispara para uma ação para o redux criar um novo state conforme setado
import * as types from "../types";

//usando saga pra validar as requisiçoes para depois mandar pro reducer
export function loginRequest(payload) {
    return {
        type: types.LOGIN_REQUEST,
        payload,
    };
}

export function loginSucces(payload) {
    return {
        type: types.LOGIN_SUCCESS,
        payload,
    };
}

export function loginFailure(payload) {
    return {
        type: types.LOGIN_FAILURE,
        payload,
    };
}
