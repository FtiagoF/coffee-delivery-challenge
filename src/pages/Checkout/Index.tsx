import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CoffeeCard } from "./components/CoffeeCard/Index";
import {
  AdressFormContainer,
  CheckoutContainer,
  FieldsGroup,
  FinishOrder,
  HeaderText,
  Payment,
  SelectedCoffees,
  AdressForm,
  AdressFormRow,
  AdressFormInput,
  CoffeeCardList,
  PaymentOptions,
  PaymentButton,
  HeaderAdress,
  HeaderPayment,
} from "./style";

export function Checkout() {
  return (
    <CheckoutContainer>
      <FinishOrder>
        <FieldsGroup>
          <h3>Complete seu pedido</h3>
          <AdressFormContainer>
            <HeaderAdress>
              <MapPinLine size={22} weight="light" />
              <HeaderText>
                <h4>Endereço de entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </HeaderText>
            </HeaderAdress>
            <AdressForm>
              <AdressFormRow>
                <AdressFormInput type="text" placeholder="CEP" />
              </AdressFormRow>
              <AdressFormInput type="text" placeholder="Rua" />
              <AdressFormRow>
                <AdressFormInput type="text" placeholder="Número" />
                <AdressFormInput type="text" placeholder="Complemento" />
              </AdressFormRow>
              <AdressFormRow>
                <AdressFormInput type="text" placeholder="Bairro" />
                <AdressFormInput type="text" placeholder="Cidade" />
                <AdressFormInput className="uf" type="text" placeholder="UF" />
              </AdressFormRow>
            </AdressForm>
          </AdressFormContainer>
          <Payment>
            <HeaderPayment>
                <CurrencyDollar size={22} weight="light" />
              <HeaderText>
                <h4>Pagamento</h4>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </HeaderText>
            </HeaderPayment>
            <PaymentOptions>
                <PaymentButton><CreditCard size={32} />Cartão de crédito</PaymentButton>
                <PaymentButton><Bank size={32} />Cartão de débito</PaymentButton>
                <PaymentButton><Money size={32} />Dinheiro</PaymentButton>
            </PaymentOptions>
          </Payment>
        </FieldsGroup>
        <SelectedCoffees>
          <h3>Cafés selecionados</h3>
          <CoffeeCardList>
            <CoffeeCard />
          </CoffeeCardList>
        </SelectedCoffees>
      </FinishOrder>
    </CheckoutContainer>
  );
}
