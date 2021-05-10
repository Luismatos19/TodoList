import styled from "styled-components";
import * as colors from "../../config/colors";

//cards
export const Cards = styled.div`
    width: 90%;
    height: 100%;
    position: relative;
`;

//Task conteudo

export const Task = styled.div`
    background-color: ${colors.red};
    display: flex;
    width: 100%;
    height: 130px;
    margin-top: 20px;
    border-radius: 20px;
`;

// botoes proximo e anterior
export const Next = styled.div`
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
`;

//options icons (delete, update, edit)

export const Options = styled.div`
    height: 90%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    padding-right: 20px;
    padding-top: 10px;
`;
// conteudo do task

export const TaskContent = styled.div`
    width: 80%;
    padding-left: 30px;
    margin-top: 10px;

    p {
        margin-top: 10px;
    }
`;
