import { BackgroundImage, HomeContainer, IntroductionContent, IntroductionSection, Itens, Title } from "./style";

export function Home() {
    return (
        <HomeContainer>
            <div>
                <BackgroundImage></BackgroundImage>
                <IntroductionSection>
                    <IntroductionContent>
                        <Title>
                            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        </Title>

                        <Itens>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 1</li>
                                <li>Item 1</li>
                                <li>Item 1</li>
                            </ul>
                        </Itens>
                    </IntroductionContent>
                    <img src="../src/assets/Imagem.svg" alt="" />

                </IntroductionSection>
            </div>


        </HomeContainer>
    )
}