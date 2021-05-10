import React from "react";
import { GrNext, GrPrevious, GrEdit, GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import { Container } from "../../GlobalStyle/GlobalStyles";
import { Cards, Next, Task, Options, TaskContent } from "./styled";

export default function Home() {
    return (
        <Container>
            <h1>Listas de Tarefas</h1>
            <Cards>
                <Task>
                    <TaskContent>
                        <h2> Task 1</h2>
                        <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Numquam quam velit nisi eveniet ipsa,
                            repellat, quos culpa quia eum nesciunt soluta
                            deserunt. Vel, quaerat neque. Odit, et? Incidunt,
                            tempora ab?
                        </p>
                    </TaskContent>
                    <Options>
                        <GrEdit />
                        <GrUpdate />
                        <RiDeleteBin6Line />
                    </Options>
                </Task>
            </Cards>
            <Next>
                <Link to="/">
                    <GrPrevious size={40} />
                </Link>
                <Link to="/">
                    <GrNext size={40} />
                </Link>
            </Next>
        </Container>
    );
}
