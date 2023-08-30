import { useEffect, useState } from 'react'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import { StyledIcon } from '../../components/StyledIcon'
import { SuccessContainer, OrderDetailsContainer } from './styles'
import successImg from '../../assets/success.png'
import { PaymentTypeData, UserAddressData } from '../../contexts/CartContext'

export function Success() {
  const [userAddress, setUserAddres] = useState<UserAddressData | null>(null)
  const [paymentType, setPaymentType] = useState<PaymentTypeData | null>(null)

  useEffect(() => {
    const userAddressJSON = localStorage.getItem(
      '@coffee-delivery:user-address',
    )

    if (userAddressJSON) {
      const storedUserAddress = JSON.parse(userAddressJSON)
      setUserAddres(storedUserAddress)
    }

    const paymentTypeJSON = localStorage.getItem(
      '@coffee-delivery:payment-type',
    )

    if (paymentTypeJSON) {
      const storedPaymentType = JSON.parse(paymentTypeJSON)
      setPaymentType(storedPaymentType)
    }
  }, [])

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você.</p>

      <div className="col-2">
        <OrderDetailsContainer>
          <ul>
            {userAddress && (
              <li>
                <StyledIcon variant="purple" icon={<MapPin weight="fill" />} />
                <p>
                  Entrega em{' '}
                  <strong>
                    {userAddress.streetName}, {userAddress.streetNumber}
                  </strong>
                  <br />
                  {userAddress.neighborhood} - {userAddress.city},{' '}
                  {userAddress.state}
                </p>
              </li>
            )}

            <li>
              <StyledIcon variant="yellow" icon={<Timer weight="fill" />} />
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </li>

            {paymentType && (
              <li>
                <StyledIcon
                  variant="orange"
                  icon={<CurrencyDollar weight="fill" />}
                />
                <p>
                  Pagamento na entrega
                  <br />
                  <strong>{paymentType.paymentType}</strong>
                </p>
              </li>
            )}
          </ul>
        </OrderDetailsContainer>

        <img src={successImg} alt="" />
      </div>
    </SuccessContainer>
  )
}
