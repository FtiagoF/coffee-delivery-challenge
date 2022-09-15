import { CartButton, HeaderContainer, LocationButton } from "./style";
import CoffeeDeliveryLogo from '../../assets/logo.svg'
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {

    const { cartList } = useContext(CartContext)
    
    return (
        <HeaderContainer>
            <img src={CoffeeDeliveryLogo} alt=""/>
            <nav>
                <LocationButton>
                    <MapPin size='1.375rem' weight="fill" />
                    Novo Horizonte, SP
                </LocationButton>
                <CartButton>
                    <ShoppingCartSimple size='1.375rem' weight="fill" />
                    <span>{cartList?.length}</span>
                </CartButton>
            </nav>
        </HeaderContainer>
      )
}
