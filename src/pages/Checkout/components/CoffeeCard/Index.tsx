import { Actions, CoffeeCardContainer, Details, Info, Price, RemoveButton } from "./style";
import coffee from '../../../../assets/Coffees/Americano.svg'
import { Counter } from "../../../../components/Counter/Index";
import { Trash } from "phosphor-react";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <Info>
                <img src={coffee} alt="" />
                <Details>
                    <p>Expresso Tradicional</p>
                    <Actions>
                        <Counter />
                        <RemoveButton>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </Actions>
                </Details>
            </Info>
            <Price>R$ 9,90</Price>
        </CoffeeCardContainer>
    )
}