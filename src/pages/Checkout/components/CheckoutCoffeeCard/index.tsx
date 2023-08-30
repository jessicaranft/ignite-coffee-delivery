import { useState, useContext } from 'react'

import { CheckoutCoffeeCardContainer } from './styles'
import { Trash } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'
import { CartContext } from '../../../../contexts/CartContext'

interface CheckoutCoffeeCardProps {
  id: number
  name: string
  image: string
  price: number
  initialQuantity: number
}

export function CheckoutCoffeeCard({
  id,
  name,
  image,
  price,
  initialQuantity,
}: CheckoutCoffeeCardProps) {
  const [quantity, setQuantity] = useState(initialQuantity || 1)
  const { removeItemFromCart } = useContext(CartContext)

  function handleRemoveItem() {
    removeItemFromCart(id)
  }

  return (
    <CheckoutCoffeeCardContainer>
      <img src={image} alt="" />

      <div>
        <div className="title-price-wrapper">
          <h3>{name}</h3>
          <span className="price">
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="action-wrapper">
          {<Counter quantity={quantity} setQuantity={setQuantity} />}
          <button className="remove-btn" onClick={handleRemoveItem}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </div>
    </CheckoutCoffeeCardContainer>
  )
}
