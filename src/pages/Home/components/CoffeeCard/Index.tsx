import { Container, Footer, Header, Tags } from "./style";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeType } from "../../Coffees/CoffeesItems";
import { FormEvent, useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { Counter } from "../../../../components/Counter/Index";

export function CoffeeCard({description, name, picture, price, tags}: CoffeeType) {
  const [amount, setAmount] = useState(1);

  const {addItemsToCart} = useContext(CartContext)

  function handleIncreaseAmount() {
    setAmount(state => state + 1);
  }

  function handleDecreaseAmount() {
    if(amount > 1){
      setAmount(amount - 1);
    }
  }

  function handleAddCoffeeToCart(event: FormEvent) {
    event.preventDefault();
    addItemsToCart({amount: amount, coffee: {name: name, picture: picture, price: price}});
  }

  return (
    <Container>
      <Header>
        <img src={`../../../src/assets/Coffees/${picture}`} alt="" />
        <Tags>
          {tags ? tags.map((tag) => (
            <span key={tag}>{tag}</span>
          )) : null}
        </Tags>
      </Header>
      <h1>{name}</h1>
      <p>{description}</p>
      <Footer>
        <span>
          {`${String(price).split(".")[0]}.${String(price).split(".")[1].padEnd(2, "0")}`}
        </span>
        <form onSubmit={handleAddCoffeeToCart}>
          <Counter />
          <button type="submit">
            <ShoppingCart size={22} weight="fill" />
            
          </button>
        </form>
      </Footer>
    </Container>
  );
}
