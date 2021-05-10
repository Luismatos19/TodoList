import styled, { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

  }

  body{
    font-family:sans-serif;
    background-color: ${colors.gray};
    
    
  }

  html, body, #root {
    height: 100%;
  }

  button{
    cursor: pointer;
  }

  a{ 
    text-decoration:none;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    height: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    margin-top: 40px;
`;
