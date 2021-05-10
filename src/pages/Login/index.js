import React, { useState } from "react";

import { Card } from "./styled";
import { FaUserAlt } from "react-icons/fa";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

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
