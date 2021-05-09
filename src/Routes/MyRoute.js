import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'pro-types';

//componete pra deixar rotas serem acessadas apenas quando tiver logado

export default function MyRoute({ component: Component, isclosed, ...rest }) {
  const isLoggedIn = false;

  //pra saber se o usuario esta logado e quando ele fizar login manda para a rota que ele estava tentando acessar

  if (isclosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  //se a rota nao tiver fechada ou o usuario tiver logado 

  return <Route {...res} component={Component} />;
}


//valiando as props com prop-types

MyRoute.defaultProps = {
  isClosed: false,
}

MyRoute.PropTypes = {
  component: PropTypes.oneType([PropTypes.element, PropTypes.func]).isRequired,
  isclosed: PropTypes.bool,
};