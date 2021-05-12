import styled from "styled-components";
import * as colors from "../../config/colors";

export const Card = styled.section`
    margin: auto;
    width: 70%;
    height: 600px;
    max-width: 450px;
    background: white;
    border-radius: 15px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    // user icon
    .logo {
        margin-top: 20px;
    }

    h1 {
        margin-top: 30px;
        font-size: 50px;
    }
    //input

    .input input {
        width: 100%;
        height: 35px;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
    }

    input:hover {
        border: 1px solid ${colors.red};
    }

    .input h2 {
        padding-top: 20px;
        text-align: center;
        padding-bottom: 10px;
    }

    // botao
    button {
        width: 120px;
        height: 40px;
        margin-top: 30px;
        border-radius: 20px;
        background-color: ${colors.red};
        border: none;
        font-size: 20px;
    }
`;
