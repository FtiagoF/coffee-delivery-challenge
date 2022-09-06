import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const HomeContainer = styled.main`
  top: 6.5rem;
  position: absolute;
  width: 100%;
  `;

export const BackgroundImage = styled.div`
  height: 40rem;
  background-image: url("../src/assets/Background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(100px);
`;

export const IntroductionSection = styled.section`
  top: 0;
  height: 40rem;
  width: 100%;
  position: absolute;
  padding: 6.75rem 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`;

export const LogoImage = styled.div`
  width: 40%;
  height: 100%;
  flex: 1;
  background-image: url("../src/assets/Imagem.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`;

export const IntroductionContent = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: ${(props) => props.theme["base-title"]};
  display: flex;
  gap: 1rem;
  flex-direction: column;

  h1 {
    font-weight: 800;
    font-size: 3rem;
    font-family: "Baloo 2", cursive;
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
  }
`;

export const Itens = styled.div`
  flex: 1;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 1.5rem 2.5rem;

    li {
      line-height: 130%;
      display: flex;
      
      align-items: center;
      gap: 0.75rem;
    }
  }
`;

interface ItensBackgroundColor {
  itensBackgroudColor: keyof typeof defaultTheme;
}

export const ItemIcon = styled.span<ItensBackgroundColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 100%;
  color: ${(props) => props.theme["background"]};
  background: ${props => props.theme[props.itensBackgroudColor]};
`;

export const CoffeeSection = styled.section`
  padding: 2rem 15rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
;
  h2 {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
  }
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-gap: 2.5rem ;
  grid-template: auto / repeat(auto-fit, minmax(16rem, 1fr));
`;
