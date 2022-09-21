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
    display: flex;
    flex-direction: column;
`;

export const Actions = styled.div`
    display: flex;
    gap: 0.25rem;
`;