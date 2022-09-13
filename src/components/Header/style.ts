import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 2rem 15rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    background: ${props => props.theme['background']};
    z-index: 2;
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
    cursor: pointer;
    border: 1px solid transparent;
`;

export const LocationButton = styled(BaseHeaderButton)`
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
`;

export const CartButton = styled(BaseHeaderButton)`
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
`;
