import { CartButton, HeaderContainer, LocationButton } from "./style";
import CoffeeDeliveryLogo from '../../assets/logo.svg'
import { MapPin, ShoppingCartSimple } from "phosphor-react";

export function Header() {
    
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
                </CartButton>
            </nav>
        </HeaderContainer>
      )
}
