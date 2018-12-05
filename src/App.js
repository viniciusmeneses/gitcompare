import React, { Fragment } from 'react';
// import styled from 'styled-components';

import Main from './pages/Main';

// Importando o estilo global criado
import GlobalStyle from './styles/global';

// Utilizando styled-components para criar um componente estlizado
// O componente estilizado criado é acessível somente dentro deste componente

// Sintaxe:
// const Componente = styled.tagHtml`
// css....
// `;

// Criando um h1 estilizado...
// const Title = styled.h1`
//   color: #f00;
//   font-size: 32px;
// `;

const App = () => (
  <Fragment>
    {/* Utilizando o estilo global importado para que funcione */}
    <GlobalStyle />
    {/* Utilizando o styled-component criado */}
    {/* <Title>Hello World!</Title> */}

    <Main />
  </Fragment>
);

export default App;
