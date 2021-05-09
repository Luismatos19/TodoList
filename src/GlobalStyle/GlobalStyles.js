import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor } from '../config/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

  }

  body{
    font-family:sans-serif;
    
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
  max-width: 800px;
  background: black;
  margin: 30px;
  background: ${primaryColor};


`;