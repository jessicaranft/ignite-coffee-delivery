import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 8rem 16rem;

  h1 {
    font-size: 3.2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 2rem;
    margin-bottom: 4rem;
  }

  img {
    width: 49.2rem;
    height: 29.3rem;
  }

  .col-2 {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    padding: 1.6rem;

    img {
      width: 100%;
      height: 100%;
    }

    .col-2 {
      flex-direction: column;
      gap: 3.2rem;
    }
  }
`

export const OrderDetailsContainer = styled.div`
  width: 52.6rem;
  padding: 4rem;

  display: flex;
  align-items: center;

  border: 1px solid transparent;
  background:
    linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 6px 36px;

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  ul li {
    display: flex;
    gap: 1.2rem;
  }

  ul li p {
    font-size: 1.6rem;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
