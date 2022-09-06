import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16rem;
    height: 19.375rem;
    padding: 0 1.5rem 1.25rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px;
    justify-content: space-between;

`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.75rem;
    img {
        width: 7.5rem;
        margin-top: calc(-0px - 7.5rem/2);
    }
`;

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span{
        font-family: "Baloo 2", cursive;
        font-size: 1.5rem;
        &::before {
            content: 'R$';
            font-family: 'Roboto', sans-serif;
            font-size: 0.875rem;
        }
    }

    form {
        display: flex;
        gap: 0.5rem;

        button {
            padding: 0.5rem;
        }
    } 
`;

export const Counter = styled.div`
    display: flex;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${props => props.theme['base-button']};
`;