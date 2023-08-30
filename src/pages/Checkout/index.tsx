import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CheckoutContainer,
  MenuDetailsContainer,
  OrderDetailsContainer,
  PaymentTypeButton,
  OrderDetailsDescription,
  ConfirmOrderButton,
} from './styles'
import { CheckoutCoffeeCard } from './components/CheckoutCoffeeCard'
import { CartContext, PaymentTypeData } from '../../contexts/CartContext'

const userAddressFormValidationSchema = zod.object({
  postalCode: zod.number().min(1),
  streetName: zod.string().min(1, 'Informe o nome da rua.'),
  streetNumber: zod.number().min(1),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o nome do bairro.'),
  city: zod.string().min(1, 'Informe o nome da cidade.'),
  state: zod.string().min(1, 'Informe o estado.'),
})

type UserAddressFormData = zod.infer<typeof userAddressFormValidationSchema>

export function Checkout() {
  const { cartItems, updateUserAddress, updatePaymentType } =
    useContext(CartContext)
  const { register, handleSubmit } = useForm<UserAddressFormData>({
    resolver: zodResolver(userAddressFormValidationSchema),
    defaultValues: {
      postalCode: undefined,
      streetName: '',
      streetNumber: undefined,
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const navigate = useNavigate()

  const finalPrice = getTotalItemsPrice() + 3.5

  function handleUpdatePaymentType(
    e: React.MouseEvent<HTMLButtonElement>,
    data: PaymentTypeData,
  ) {
    e.preventDefault()
    updatePaymentType(data)
  }

  function handleUpdateUserAddress(data: UserAddressFormData) {
    updateUserAddress(data)

    const newAddressJSON = JSON.stringify(data)
    localStorage.setItem('@coffee-delivery:user-address', newAddressJSON)

    navigate('/success')
  }

  function getTotalItemsPrice() {
    const totalItemsPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return totalItemsPrice
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleUpdateUserAddress)} action="">
        <OrderDetailsContainer>
          <h2>Complete seu pedido</h2>
          <div className="order-details-box">
            <OrderDetailsDescription>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido.</p>
              </div>
            </OrderDetailsDescription>

            <div className="input-wrapper">
              <input
                type="number"
                id="postalCode"
                placeholder="CEP"
                {...register('postalCode', { valueAsNumber: true })}
              />
              <input
                id="streetName"
                type="text"
                placeholder="Rua"
                {...register('streetName')}
              />
              <div className="col-2">
                <input
                  id="streetNumber"
                  type="number"
                  placeholder="Número"
                  {...register('streetNumber', { valueAsNumber: true })}
                />
                <div className="input-with-elements">
                  <input
                    id="complement"
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  <span>Opcional</span>
                </div>
              </div>
              <div className="col-3">
                <input
                  id="neighborhood"
                  type="text"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                <input
                  id="city"
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <input
                  id="state"
                  type="text"
                  placeholder="UF"
                  {...register('state')}
                />
              </div>
            </div>
          </div>

          <div className="order-details-box">
            <OrderDetailsDescription>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar.
                </p>
              </div>
            </OrderDetailsDescription>

            <div className="payment-type-wrapper">
              <PaymentTypeButton
                onClick={(e) => {
                  handleUpdatePaymentType(e, {
                    paymentType: 'Cartão de Crédito',
                  })
                }}
              >
                <CreditCard size={16} />
                Cartão de crédito
              </PaymentTypeButton>
              <PaymentTypeButton
                onClick={(e) => {
                  handleUpdatePaymentType(e, {
                    paymentType: 'Cartão de Débito',
                  })
                }}
              >
                <Bank size={16} />
                Cartão de débito
              </PaymentTypeButton>
              <PaymentTypeButton
                onClick={(e) => {
                  handleUpdatePaymentType(e, { paymentType: 'Dinheiro' })
                }}
              >
                <Money size={16} />
                Dinheiro
              </PaymentTypeButton>
            </div>
          </div>
        </OrderDetailsContainer>

        <MenuDetailsContainer>
          <h2>Cafés selecionados</h2>

          <div className="coffee-details-box">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <CheckoutCoffeeCard
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    initialQuantity={item.quantity}
                  />
                </li>
              ))}
            </ul>

            <div className="total-price-wrapper">
              {cartItems.length > 0 ? (
                <>
                  <p>Total de itens</p>
                  <span className="price">
                    {getTotalItemsPrice().toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                  <p>Entrega</p>
                  <span className="price">R$ 3,50</span>
                  <span className="total-price">Total</span>
                  <span className="total-price">
                    {finalPrice.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </>
              ) : (
                <p className="empty-cart-message">Não há itens no carrinho.</p>
              )}
            </div>

            <ConfirmOrderButton type="submit">
              Confirmar pedido
            </ConfirmOrderButton>
          </div>
        </MenuDetailsContainer>
      </form>
    </CheckoutContainer>
  )
}
