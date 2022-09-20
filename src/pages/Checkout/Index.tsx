import { MapPinLine } from "phosphor-react";
import { AdressFormContainer, Header, CheckoutContainer, FieldsGroup, FinishOrder, HeaderText, Payment, SelectedCoffees, AdressForm, AdressFormRow, AdressFormInput } from "./style";


export function Checkout() {
  return (
    <CheckoutContainer>
      <FinishOrder>
        <FieldsGroup>
            <h3>Complete seu pedido</h3>            
            <AdressFormContainer>
                <Header>
                    <MapPinLine size={16} weight="light" />
                    <HeaderText>
                        <h4>Endereço de entrega</h4>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </HeaderText>
                </Header>
                <AdressForm>
                    <AdressFormRow>
                        <AdressFormInput type="text" placeholder="CEP" />
                    </AdressFormRow>
                    <AdressFormInput type="text" placeholder="Rua"/>
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
                <h1>pagamento</h1>
            </Payment>
        </FieldsGroup>
        <SelectedCoffees>
            <h3>Cafés selecionados</h3>
            <h1>1</h1>
        </SelectedCoffees>
      </FinishOrder>
    </CheckoutContainer>
  );
}
