import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1440px;
  padding: 3.2rem 16rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 4rem;
  }

  a {
    text-decoration: none;
  }

  .right-container {
    display: flex;
    gap: 0.8rem;
  }

  .right-container div {
    padding: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    font-size: 1.4rem;
    line-height: 130%;

    border-radius: 6px;
  }

  .right-container div:first-child {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};
  }

  button {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 6px;

    width: 3.8rem;
    height: 3.8rem;

    position: relative;

    transition: opacity 0.2s;

    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }

  button span {
    position: absolute;
    top: -0.8rem;
    right: -0.8rem;

    font-size: 1.2rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    background-color: ${(props) => props.theme['yellow-dark']};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 1.6rem;
  }
`
