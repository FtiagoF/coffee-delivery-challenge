import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 19.375rem;
  padding: 0 1.5rem 1.25rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  justify-content: space-between;

  h1 {
    font-size: 1.25rem;
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;

  span {
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    font-size: 0.625rem;
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 100px;
    text-transform: uppercase;
  }
  img {
    width: 7.5rem;
    margin-top: calc(-0px - 7.5rem / 5);
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  justify-content: space-between;

  span {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-text"]};
    display: flex;
    gap: 0.25rem;
    &::before {
      content: "R$";
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  form {
    display: flex;
    gap: 0.5rem;
    
    & > button {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      border: none;
      background-color: ${(props) => props.theme["purple-dark"]};
      color: ${(props) => props.theme["white"]};
      cursor: pointer;

      transition: 0.2s ease-in-out;

      &:hover {
        background: ${(props) => props.theme["purple"]};
      }
    }
  }
`;


