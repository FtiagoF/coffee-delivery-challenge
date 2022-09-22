import { Actions, CoffeeCardContainer, Details, Info, Price, RemoveButton } from "./style";
import { Counter } from "../../../../components/Counter/Index";
import { Trash } from "phosphor-react";
import { CoffeeType } from "../../../Home/Coffees/CoffeesItems";

interface CoffeeCardProps {
    coffee: CoffeeType
}

export function CoffeeCard({coffee}: CoffeeCardProps) {
    return (
        <CoffeeCardContainer>
            <Info>
                <img src={coffee.picture} alt="" />
                <Details>
                    <p>{coffee.name}</p>
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