import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { CoffeeCard } from "./components/CoffeeCard/Index";
import { BackgroundImage, CoffeeSection, HomeContainer, IntroductionContent, IntroductionSection, ItemIcon, Itens, LogoImage, Title } from "./style";

export function Home() {
    return (
        <HomeContainer>
                <BackgroundImage></BackgroundImage>
                <IntroductionSection>
                    <IntroductionContent>
                        <Title>
                            <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</p>
                        </Title>

                        <Itens>
                            <ul>
                                <li><ItemIcon itensBackgroudColor="yellow-dark"><ShoppingCartSimple weight="fill"/></ItemIcon> Compra simples e segura</li>
                                <li><ItemIcon itensBackgroudColor="yellow"><Timer weight="fill"/></ItemIcon> Entrega rápida e rastreada</li>
                                <li><ItemIcon itensBackgroudColor="base-text"><Package weight="fill"/></ItemIcon> Embalagem mantém o café intacto</li>
                                <li><ItemIcon itensBackgroudColor="purple"><Coffee weight="fill"/></ItemIcon> O café chega fresquinho até você</li>
                            </ul>
                        </Itens>
                    </IntroductionContent>
                    <LogoImage></LogoImage>

                </IntroductionSection>
                <CoffeeSection>
                    <CoffeeCard />

                    

                </CoffeeSection>
        </HomeContainer>
    )
}