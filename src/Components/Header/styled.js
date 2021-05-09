import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  background: ${colors.red};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// botoes
export const Links = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;
  
  a {
    padding-right: 15px;
    color: ${colors.black};
  }
`;

//botao menu 

export const Menu = styled.menu`
  padding-left: 5px;

`;

export const Title = styled.h1`

`;