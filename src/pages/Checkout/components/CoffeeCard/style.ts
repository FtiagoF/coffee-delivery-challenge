import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3.125rem;
    
`;

export const Info = styled.div`
    display: flex;
    gap: 1.25rem;

    img {
        height: 4rem;
        width: 4rem;
    }
`;

export const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Actions = styled.div`
    display: flex;
    gap: 0.25rem;
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  background-color: ${(props) => props.theme["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
    cursor: pointer;

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;


export const Price = styled.span`
    font-weight: 800;
    color: ${(props) => props.theme["base-text"]};
`;