import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import CompareList from '../../components/CompareList';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositoryError: false,
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const { repositoryInput, repositories } = this.state;
      const { data: repository } = await api.get(`repos/${repositoryInput}`);

      // SEMPRE FORMATAR OS DADOS ANTES DE CHEGAR NO METODO RENDER/STATE
      // PARA QUE A FORMATACAO NAO SEJA EXECUTADA TODA VEZ QUE O RENDER
      // ACONTECE NOVAMENTE

      // Formatando a data do ultimo commit com o moment para aparecer
      // quanto tempo atras ocorreu
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      // Setando o estado limpando o input e adicionando o repositorio buscado a lista
      // Como o estado nao muda (imutavel), criamos um novo array
      // passando os elementos ja existentes no repositories e adicionando o outro elemento
      // vindo do response.data
      this.setState({
        repositoryInput: '',
        repositoryError: false,
        repositories: [...repositories, repository],
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    const { repositories, repositoryInput, repositoryError } = this.state;
    return (
      <Container>
        <img src={logo} alt="GitCompare" />

        {/* Podemos passar para um styled-components, propriedades que serao acessiveis */}
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}