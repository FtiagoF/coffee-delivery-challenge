import { Container, Footer, Header, Counter, Tags } from "./style";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeType } from "../../Coffees/Coffee";
import { useState } from "react";

export function CoffeeCard({
  description,
  name,
  picture,
  price,
  tags,
}: CoffeeType) {
  const [counter, setCounter] = useState(1);

  return (
    <Container>
      <Header>
        <img src={`../../../src/assets/Coffees/${picture}`} alt="" />
        <Tags>
          {tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </Tags>
      </Header>
      <h1>{name}</h1>
      <p>{description}</p>
      <Footer>
        <span>
          {`${String(price).split(".")[0]}.${String(price)
            .split(".")[1]
            .padEnd(2, "0")}`}
        </span>
        <form >
          <Counter>
            <button
            type="button"
              aria-hidden="true"
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              <Minus size={16} weight="bold" />
            </button>
            <input type="number" min={1} value={counter} readOnly />

            <button
              type="button"
              aria-hidden="true"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              <Plus size={16} weight="bold" />
            </button>
          </Counter>
          <button type="submit">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </form>
      </Footer>
    </Container>
  );
}
