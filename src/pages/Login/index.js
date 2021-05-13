import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Card } from "./styled";
import { FaUserAlt } from "react-icons/fa";
import * as actions from "../../store/modules/login/actions";

export default function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    dispatch(actions.loginRequest());
    async function handleSubmit(e) {
        e.preventDefault();

        dispatch(actions.loginRequest({ email, password }));
    }

    return (
        <Card>
            <form action="#" onSubmit={handleSubmit}>
                <div className="input">
                    <div className="logo">
                        <FaUserAlt size={70} />
                    </div>
                    <div>
                        <h1>LOGIN</h1>
                    </div>
                    <h2> Email </h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                    ></input>
                    <h2> Senha </h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                    ></input>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </Card>
    );
}
