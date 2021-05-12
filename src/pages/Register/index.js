import React, { useState } from "react";
import FormRegister from "../../Components/FormRegister/index";

import { Card } from "./styled";
import { FaUserAlt } from "react-icons/fa";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        FormRegister(username, email, password);
    };

    return (
        <Card>
            <div className="logo">
                <FaUserAlt size={70} />
            </div>
            <div>
                <h1>Registre-se</h1>
            </div>
            <form action="#" className="input" onSubmit={handleSubmit}>
                <h2> Username </h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Crie um username"
                ></input>
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
                <button type="submit">Entrar</button>
            </form>
        </Card>
    );
}
