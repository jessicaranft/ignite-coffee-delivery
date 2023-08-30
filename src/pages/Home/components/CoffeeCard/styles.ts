import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 25.6rem;
  height: 31rem;
  padding: 2rem;
  margin-bottom: 2rem;

  background-color: ${(props) => props.theme['base-card']};

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  img {
    position: absolute;
    top: -2.4rem;
  }

  ul {
    margin-top: calc(1.2rem + 8rem);
    margin-bottom: 1.6rem;
    list-style: none;

    display: flex;
    gap: 0.4rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 3.3rem;
  }

  .col-2 {
    display: flex;
    gap: 2.3rem;
  }

  .col-2 span {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }

  .col-2 .price {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
    margin-left: 0.4rem;
  }

  form {
    display: flex;
    gap: 0.8rem;
  }

  input {
    background-color: ${(props) => props.theme['base-button']};
    border: none;
    border-radius: 6px;
    width: 72px;
    height: 3.8rem;
  }

  .checkout-btn {
    background-color: ${(props) => props.theme['purple-dark']};
    color: white;

    border: none;
    border-radius: 6px;

    min-width: 3.8rem;
    height: 3.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: background-color 0.2s;
  }

  .checkout-btn:hover {
    background-color: ${(props) => props.theme.purple};
  }
`

export const Tag = styled.span`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};

  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
`
