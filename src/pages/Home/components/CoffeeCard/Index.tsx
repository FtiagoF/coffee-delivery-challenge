import { CardContainer, CardFooter, CardHeader, Counter } from "./style";
import coffee from "../../../../assets/Coffees/Expresso.svg";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

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
            <button aria-hidden="true">
              <Plus size={16} weight="bold" />
            </button>
            <input type="number" min={1} value={1} readOnly/>
            <button aria-hidden="true">
                <Minus size={16} weight="bold" />
            </button>
          </Counter>
          <button type="submit">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </form>
      </CardFooter>
    </CardContainer>
  );
}
