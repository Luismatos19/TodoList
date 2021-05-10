import React from 'react';

import { Card } from './styled';
import { FaUserAlt } from "react-icons/fa";

export default function Register() {
  return (
    <Card>
      <div className="logo">
        <FaUserAlt size={70} />
      </div>
      <div><h1>Registre-se</h1></div>
      <div className="input">
        <h2> Username </h2>
        <input type="email" placeholder="Crie um username"></input>
        <h2> Email </h2>
        <input type="email" placeholder="Digite seu email"></input>
        <h2> Senha </h2>
        <input type="password" placeholder="Digite sua senha"></input>
      </div>
      <button type="button">Entrar</button>
    </Card >
  )
}