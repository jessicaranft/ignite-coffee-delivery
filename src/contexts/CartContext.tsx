import { ReactNode, createContext, useEffect, useState } from 'react'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export interface UserAddressData {
  postalCode: number
  streetName: string
  streetNumber: number
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export interface PaymentTypeData {
  paymentType: string
}

interface CartContextType {
  cartItems: CartItem[]
  addItemToCart: (item: CartItem, quantity: number) => void
  removeItemFromCart: (id: number) => void
  updateUserAddress: (newAddress: UserAddressData) => void
  updatePaymentType: (data: PaymentTypeData) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItemToCart(item: CartItem, quantity: number) {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        ),
      )
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity }])
    }
  }

  function removeItemFromCart(id: number) {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (cartItem) => cartItem.id !== id,
      )

      const cartItemsJSON = JSON.stringify(updatedCartItems)
      localStorage.setItem('@coffee-delivery:cart-items', cartItemsJSON)

      return updatedCartItems
    })
  }

  function updateUserAddress(data: UserAddressData) {
    const newAddress: UserAddressData = {
      postalCode: data.postalCode,
      streetName: data.streetName,
      streetNumber: data.streetNumber,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
    }

    const newAddressJSON = JSON.stringify(newAddress)
    localStorage.setItem('@coffee-delivery:user-address', newAddressJSON)
  }

  function updatePaymentType(data: PaymentTypeData) {
    const newPaymentType: PaymentTypeData = {
      paymentType: data.paymentType,
    }

    const newPaymentTypeJSON = JSON.stringify(newPaymentType)
    localStorage.setItem('@coffee-delivery:payment-type', newPaymentTypeJSON)
  }

  useEffect(() => {
    const storedCartItemsJSON = localStorage.getItem(
      '@coffee-delivery:cart-items',
    )

    if (storedCartItemsJSON) {
      const storedCartItems = JSON.parse(storedCartItemsJSON)
      setCartItems(storedCartItems)
    }
  }, [])

  useEffect(() => {
    const cartItemsJSON = JSON.stringify(cartItems)

    if (cartItems.length > 0) {
      localStorage.setItem('@coffee-delivery:cart-items', cartItemsJSON)
    }
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updatePaymentType,
        updateUserAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
