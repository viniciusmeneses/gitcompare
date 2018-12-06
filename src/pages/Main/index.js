import React from 'react';
import CompareList from '../../components/CompareList';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

const Main = () => (
  <Container>
    <img src={logo} alt="GitCompare" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
