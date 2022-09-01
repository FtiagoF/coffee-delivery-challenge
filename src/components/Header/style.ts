import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 2rem 10rem;
    background-color: ${props => props.theme['background']};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    
    nav {
        display: flex;
        gap: 0.75rem;
    }
`;

const BaseHeaderButton = styled.button`
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
`;

export const LocationButton = styled(BaseHeaderButton)`
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
`;

export const CartButton = styled(BaseHeaderButton)`
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
`;
