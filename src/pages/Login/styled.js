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
        margin-top: 60px;
        margin-left: 90px;
    }

    h1 {
        margin-top: 30px;
        font-size: 50px;
        text-align: center;
    }
    //input
    .input {
        margin-top: 30px;
    }

    .input input {
        width: 100%;
        height: 35px;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
    }

    .input h2 {
        padding-top: 30px;
        text-align: center;
        padding-bottom: 10px;
    }

    // botao
    button {
        width: 120px;
        height: 40px;
        margin-top: 50px;
        border-radius: 20px;
        background-color: ${colors.red};
        border: none;
        font-size: 20px;
    }
`;
