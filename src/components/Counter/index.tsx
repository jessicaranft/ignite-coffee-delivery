import { Minus, Plus } from 'phosphor-react'

import { CounterContainer } from './styles'

interface CounterProps {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}

export function Counter({ quantity, setQuantity }: CounterProps) {
  function handleIncrement(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setQuantity(quantity + 1)
  }

  function handleDecrement(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <CounterContainer>
      <button onClick={handleDecrement} className="counter-btn">
        <Minus />
      </button>
      <p className="counter-number">{quantity}</p>
      <button onClick={handleIncrement} className="counter-btn">
        <Plus />
      </button>
    </CounterContainer>
  )
}
