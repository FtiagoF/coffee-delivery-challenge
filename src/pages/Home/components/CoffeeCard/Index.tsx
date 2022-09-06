import { CardContainer, CardFooter, CardHeader, Counter } from "./style";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeType } from "../../Coffees/Coffee";


export function CoffeeCard({description, name, picture, price, tag}: CoffeeType) {
  console.log(tag);
  
  return (
    <CardContainer>
      <CardHeader>
        <img src={`../../../src/assets/Coffees/${picture}`} alt="" />
        <span>{tag}</span>
      </CardHeader>
      <h1>{name}</h1>
      <p>{description}</p>
      <CardFooter>
        <span>
          {`${String(price).split('.')[0]}.${String(price).split('.')[1].padEnd(2,'0')}`}
        </span>
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
