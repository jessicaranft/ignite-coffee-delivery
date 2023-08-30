import { styled } from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  padding: 3.2rem 16rem;

  form {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3.2rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.6rem;

    form {
      flex-direction: column;
    }
  }
`

export const OrderDetailsContainer = styled.div`
  width: 100%;

  input,
  .special-input {
    width: 100%;

    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    padding: 1.4rem;

    font-size: 1.4rem;
    color: ${(props) => props.theme['base-label']};

    &:placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  #postalCode::-webkit-outer-spin-button,
  #postalCode::-webkit-inner-spin-button,
  #streetNumber::-webkit-outer-spin-button,
  #streetNumber::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  .order-details-box {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    padding: 4rem;
    margin-bottom: 1.2rem;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .input-wrapper > input:first-child {
    max-width: 20rem;
  }

  .input-with-elements {
    position: relative;
  }

  .input-with-elements input {
    padding-right: 8rem;
  }

  .input-with-elements span {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);

    font-style: italic;
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-label']};
  }

  .col-2 {
    display: grid;
    grid-template-columns: 20rem 34.8rem;
    gap: 1.6rem;

    position: relative;
  }

  .col-3 {
    display: grid;
    grid-template-columns: 20rem 27.6rem 6rem;
    gap: 1.6rem;
  }

  .payment-type-wrapper {
    display: flex;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    .order-details-box {
      padding: 3rem;
    }

    .col-2,
    .col-3 {
      display: flex;
      flex-direction: column;
    }

    .input-wrapper > input:first-child {
      max-width: 100%;
    }

    .payment-type-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
  }
`

export const OrderDetailsDescription = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 1.4rem;
  }
`

export const PaymentTypeButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  width: 100%;
  height: 5.1rem;
  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1.2rem;

  font-size: 1.2rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};

  cursor: pointer;

  transition: background-color 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &:active {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const MenuDetailsContainer = styled.div`
  width: 100%;

  .coffee-details-box {
    background-color: ${(props) => props.theme['base-card']};
    padding: calc(4rem - 3.2rem) 4rem 4rem;

    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  ul {
    list-style: none;
  }

  .total-price-wrapper {
    width: 100%;
    margin-top: 2.5rem;

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    justify-content: space-between;
    gap: 1.2rem;

    p {
      font-size: 1.4rem;
    }

    .price {
      font-size: 1.6rem;
      text-align: right;
    }

    .total-price {
      font-size: 2rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    .empty-cart-message {
      margin-top: 3.6rem;
    }
  }

  @media (max-width: 768px) {
    .coffee-details-box {
      padding: 0 2rem 2rem;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;

  background-color: ${(props) => props.theme.yellow};
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  border: 0;
  border-radius: 6px;

  padding: 1.2rem 0.8rem;
  margin-top: 2.4rem;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
