import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "../../../services/axios";
import { toast } from "react-toastify";
import { get } from "lodash";
import history from "../../../services/history";

//import { toast } from "react-toastfy";

import * as actions from "./actions";
import * as types from "../types";

function* LoginRequest({ payload }) {
    try {
        const response = yield call(axios.post, "/authenticate", payload);
        yield put(actions.loginSucces({ ...response.data }));
        toast.success("Voce fez login");

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        history.push(payload.prevPath);
    } catch (err) {
        toast.error("Usuario ou senha invalidos");

        yield put(actions.loginFailure());
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, "auth.token", "");
    if (!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_REQUEST, LoginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
