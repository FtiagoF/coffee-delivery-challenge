import { CardContainer, CardFooter, CardHeader, Counter } from "./style";
import coffee from "../../../../assets/Coffees/Expresso.svg";
import { Plus, ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return (
    <CardContainer>
      <CardHeader>
        <img src={coffee} alt="" />
        <span>TRADICIONAL</span>
      </CardHeader>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CardFooter>
        <span>9,90</span>
        <form>
          <Counter>
            <Plus size={16} weight="fill" />
            <input type="button" value="" />
            <span>1</span>
            <input type="button" value="" />
            </Counter>
          <button type="submit">
            <ShoppingCart size={16} weight="fill" />
          </button>
        </form>
      </CardFooter>
    </CardContainer>
  );
}
