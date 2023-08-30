import { useContext, useState } from 'react'

import { Counter } from '../../../../components/Counter'
import { CoffeeCardContainer, Tag } from './styles'
import { ShoppingCart } from 'phosphor-react'

import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeCardProps {
  id: number
  name: string
  description: string
  tags: string[]
  image: string
  price: number
}

export function CoffeeCard({
  id,
  name,
  description,
  tags,
  image,
  price,
}: CoffeeCardProps) {
  const { addItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    const coffeeItem = {
      id,
      name,
      image,
      price,
      quantity,
    }

    addItemToCart(coffeeItem, quantity)
    alert('Item adicionado com sucesso!')
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />

      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>

      <h2>{name}</h2>

      <p>{description}</p>

      <div className="col-2">
        <div>
          <span>R$</span>
          <span className="price">
            {price.toLocaleString('pt-BR', {
              style: 'decimal',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <form>
          <Counter quantity={quantity} setQuantity={setQuantity} />
          <button onClick={handleAddToCart} className="checkout-btn">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </div>
    </CoffeeCardContainer>
  )
}
