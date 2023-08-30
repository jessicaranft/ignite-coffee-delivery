import { styled } from 'styled-components'
import heroBackground from '../../assets/hero-bg.png'

export const HomeContainer = styled.main`
  width: 100%;
`

export const HeroContainer = styled.section`
  padding: 9.2rem 16rem;
  background: url(${heroBackground}) no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.6rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    list-style: none;

    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;

    margin-top: 6.6rem;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  ul li p {
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 768px) {
    padding: 1.6rem;
    flex-direction: column;

    h1 {
      font-size: 3.6rem;
    }

    img {
      max-width: 30rem;
    }
  }
`

export const MenuContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  padding: 0 16rem 3.2rem;
  margin: auto;

  h1 {
    font-size: 3.2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 5rem;
  }

  ul {
    list-style: none;

    width: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem;
  }

  @media (max-width: 768px) {
    padding: 1.6rem;
  }
`
