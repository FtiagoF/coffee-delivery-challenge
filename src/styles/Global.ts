import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 130%;
    }

    body {
        background: ${props => props.theme['background']};
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
        border: 1px solid ${props => props.theme['yellow-dark']};
    }

    body, input, button, textarea {
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`;

