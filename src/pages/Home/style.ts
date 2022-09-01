import styled from 'styled-components'

export const HomeContainer = styled.main`
    
`;

export const BackgroundImage = styled.div`
    top: 6.5rem;
    width: 100%;
    height: 34rem;
    background-image: url('../src/assets/Background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;  
    filter: blur(50px)
`;

export const IntroductionSection = styled.section`
    top: 6.5rem;
    height: 34rem;
    position: absolute;
    padding: 6.75rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    img {
        width: 45%;
    }
`;

export const IntroductionContent = styled.div`
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
`;

export const Title = styled.div`
    color: ${props => props.theme['base-title']};

    & > * {
        line-height: 130%;
        
    }

    h1 {
        font-weight: 800;
        font-size: 3.5rem;
        font-family: 'Baloo 2', cursive;
    }

    p {
        font-size: 1.25rem;
    }
`;

export const Itens = styled.div`

    ul {
        list-style: none;
    }
`;



