import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

export const Form = styled.form`
  margin-top: 20px;
  padding: 0 10px;
  max-width: 400px;
  width: 100%;
  display: flex;

  /* Referenciando elementos filhos dentro de um styled-component
  Como se fosse SASS */
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    /* Acessando uma propriedade passada (withError) e verificando seu valor
    para aplicar a borda */
    border: ${props => (props.withError ? '2px solid #f26060' : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: ${props => (props.isDisabled ? '#f26060' : '#5fceb4')};
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    transition: all 0.3s ease;
    cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};

    /* Referenciando o proprio elemento dentro dele com & */
    &:hover {
      background: ${props => (props.isDisabled ? '#dc5858' : '#56bca4')};
    }
  }
`;
