import { styled } from 'styled-components'

export type StyledIconVariant = 'orange' | 'yellow' | 'brown' | 'purple'

interface StyledIconContainerProps {
  variant: StyledIconVariant
}

const styledIconVariants = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  brown: 'base-title',
  purple: 'purple',
}

export const StyledIconContainer = styled.div<StyledIconContainerProps>`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.8rem;
  border-radius: 50%;
  color: ${(props) => props.theme.white};

  background-color: ${(props) =>
    props.theme[styledIconVariants[props.variant]]};
`
