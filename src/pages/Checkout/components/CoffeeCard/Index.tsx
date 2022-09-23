import { Actions, CoffeeCardContainer, Details, Divider, Info, Price, RemoveButton } from "./style";
import { Counter } from "../../../../components/Counter/Index";
import { Trash } from "phosphor-react";
import { CoffeeType } from "../../../Home/Coffees/CoffeesItems";
import { useContext } from "react";
import { CartButton } from "../../../../components/Header/style";
import { CartContext } from "../../../../contexts/CartContext";

interface CoffeeCardProps {
    coffee: CoffeeType
}

export function CoffeeCard({coffee}: CoffeeCardProps) {
    const { removeItemFromCart } = useContext(CartContext);

    function handleRemoveItem() {
        removeItemFromCart(coffee.name)
    }
    return (
        <>
        <CoffeeCardContainer>
            <Info>
                <img src={coffee.picture} alt="" />
                <Details>
                    <p>{coffee.name}</p>
                    <Actions>
                        <Counter />
                        <RemoveButton onClick={handleRemoveItem}>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </Actions>
                </Details>
            </Info>
            <Price>R$ 9,90</Price>
        </CoffeeCardContainer>
        <Divider/>
        </>
    )
}