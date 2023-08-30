import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import { useContext, useEffect, useState } from 'react'
import { CartContext, CartItem } from '../../contexts/CartContext'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    const cartItemsJSON = localStorage.getItem('@coffee-delivery:cart-items')

    if (cartItemsJSON) {
      const storedCartItems: CartItem[] = JSON.parse(cartItemsJSON)

      const totalQuantity = storedCartItems.reduce(
        (total: number, item: CartItem) => total + item.quantity,
        0,
      )

      setTotalQuantity(totalQuantity)
    }
  }, [])

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <div className="right-container">
        <div>
          <MapPin weight="fill" size={22} />
          <p>Porto Alegre, RS</p>
        </div>
        <button>
          <NavLink to="/checkout">
            <ShoppingCart weight="fill" size={22} color="#C47F17" />
            {cartItems && <span>{totalQuantity}</span>}
          </NavLink>
        </button>
      </div>
    </HeaderContainer>
  )
}
