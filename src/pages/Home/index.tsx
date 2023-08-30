import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import hero from '../../assets/hero.png'
import { menuData } from '../../data/menu'

import { HeroContainer, HomeContainer, MenuContainer } from './styles'
import { StyledIcon } from '../../components/StyledIcon'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>

          <ul>
            <li>
              <StyledIcon
                variant="orange"
                icon={<ShoppingCart weight="fill" />}
              />
              <p>Compra simples e segura</p>
            </li>

            <li>
              <StyledIcon variant="brown" icon={<Package weight="fill" />} />
              <p>Embalagem mantém o café intacto</p>
            </li>
            <li>
              <StyledIcon variant="yellow" icon={<Timer weight="fill" />} />
              <p>Entrega rápida e rastreada</p>
            </li>
            <li>
              <StyledIcon variant="purple" icon={<Coffee weight="fill" />} />
              <p>O café chega fresquinho até você</p>
            </li>
          </ul>
        </div>

        <div>
          <img
            src={hero}
            alt="foto de um copo de café com vários grãos de café ao fundo"
          />
        </div>
      </HeroContainer>

      <MenuContainer>
        <h1>Nossos cafés</h1>

        <ul>
          {menuData.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeCard
                id={coffee.id}
                name={coffee.name}
                description={coffee.description}
                image={coffee.image}
                price={coffee.price}
                tags={coffee.tags}
              />
            </li>
          ))}
        </ul>
      </MenuContainer>
    </HomeContainer>
  )
}
