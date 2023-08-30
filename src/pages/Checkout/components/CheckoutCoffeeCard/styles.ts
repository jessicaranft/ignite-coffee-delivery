import { styled } from 'styled-components'

export const CheckoutCoffeeCardContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 3.2rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  div {
    width: 100%;
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  .title-price-wrapper {
    margin-bottom: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title-price-wrapper h3 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .title-price-wrapper span {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }

  .action-wrapper {
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

  .remove-btn {
    background-color: ${(props) => props.theme['base-button']};

    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};

    border: 0;
    border-radius: 6px;

    width: 9.1rem;
    height: 3.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    padding: 0.8rem;

    cursor: pointer;

    transition: background-color 0.2s;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  .remove-btn:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  @media (max-width: 768px) {
    img {
      width: 5.6rem;
      height: 5.6rem;
    }

    .title-price-wrapper h3,
    .title-price-wrapper span {
      font-size: 1.4rem;
    }
  }
`
