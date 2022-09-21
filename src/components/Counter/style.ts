import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  font-size: 1.25rem;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: ${(props) => props.theme["purple"]};
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  input {
    width: 100%;
    background: transparent;
    text-align: center;
    border: none;
    color: ${(props) => props.theme["base-title"]};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;