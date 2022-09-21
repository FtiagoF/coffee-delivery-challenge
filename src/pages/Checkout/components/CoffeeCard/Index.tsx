import { Actions, CoffeeCardContainer, Details, Info } from "./style";
import coffee from '../../../../assets/Coffees/Americano.svg'
import { Counter } from "../../../../components/Counter/Index";
export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <Info>
                <img src={coffee} alt="" />
                <Details>
                    <p>Expresso Tradicional</p>
                    <Actions>
                        <Counter />
                        
                    </Actions>
                </Details>
            </Info>
            <span>R$ 9,90</span>
        </CoffeeCardContainer>
    )
}