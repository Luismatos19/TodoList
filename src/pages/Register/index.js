import React, { useState } from "react";
import { toast } from "react-toastify";
import history from "../../services/history";
import api from "../../services/axios";
import { Card } from "./styled";
import { FaUserAlt } from "react-icons/fa";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = {
        username: username,
        email: email,
        password: password,
    };

    async function handleSubmit(e) {
        e.preventDefault();
        //header paraa  requisição
        const headers = {
            "Content-Type": "application/json",
            Authorization: "JWT fefege...",
        };

        try {
            await api.post("/register", user, {
                headers: headers,
            });
            toast.success("Registro feito com sucesso");
            history.push("/home");
        } catch (err) {
            console.log(err);
            toast.error("Preencha todos os campos");
        }
    }

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
