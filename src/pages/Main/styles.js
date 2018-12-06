import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
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
    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #5fceb4;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    transition: all 0.3s ease;

    /* Referenciando o proprio elemento dentro dele com & */
    &:hover {
      background: #56bca4;
    }
  }
`;
