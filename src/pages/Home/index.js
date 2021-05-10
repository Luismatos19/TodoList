import React from 'react';
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

import { Container } from '../../GlobalStyle/GlobalStyles';
import { Cards } from './styled';

export default function Home() {
  return (
    <Container>
      <h1>Listas de Tarefas</h1>
      <Cards>
        <div className="tasks">
          <h1> Task 1</h1>
        </div>
        <div className="tasks">
          <h1> Task 2</h1>
        </div>
        <div className="tasks">
          <h1> Task 3</h1>
        </div>
        <div className="tasks">
          <h1> Task 4</h1>
        </div>
        <Link to="/" ><GrNext size={40} /></Link>
      </Cards>
    </Container>
  )
}