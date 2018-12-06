import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin: 40px 0;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 10px 10px;
  color: #262626;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;

  &:hover {
    filter: grayscale(100%) opacity(90%);
  }

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #b2b2b2;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #9e9e9e;
        font-style: italic;
      }

      &:nth-child(odd) {
        background: #f5f5f5;
      }
    }
  }

  button {
    border: 0;
    background-color: transparent;
    box-shadow: none;
    position: absolute;
    top: 0;
    right: 0;
    color: #353535;
  }

  button.delete {
    margin: 2px 5px 0 0;
    font-size: 20px;
  }

  button.refresh {
    margin: 5px 25px 0 0;
    font-size: 16px;
  }
`;
