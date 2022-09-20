import styled from "styled-components";

export const CheckoutContainer = styled.section`
  position: absolute;
  top: 6.5rem;
  width: 100%;
  padding: 6.5rem 15rem;
  min-height: calc(100vh - 6.5rem);
`;

export const FinishOrder = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  height: 100%;
  
  h3 {
    font-family: "Baloo 2", cursive;
    font-size: 1.125rem;
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const FieldsGroup = styled.div`
  grid-column: span 7;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AdressFormContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const Header = styled.header`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme['yellow-dark']}
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  h4 {
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
  }
   
  p {
    color: ${props => props.theme['base-text']};
  }
`;

export const AdressForm = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const AdressFormRow = styled.div`
  display: flex;
  gap: 0.875rem;

  & > *:first-child {
    width: 12.5rem;
  }

  &:last-child > .uf {
    width: 3.75rem;
  }
`;

export const AdressFormInput = styled.input`
  padding: 0.875rem;
  width: 100%;
  border-radius: 4px;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
`;

export const Payment = styled.div`
  background-color: green;
  flex: 1;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const SelectedCoffees = styled.div`
  grid-column: span 5;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;
