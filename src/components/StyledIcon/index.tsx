import { ReactNode } from 'react'
import { StyledIconContainer, StyledIconVariant } from './styles'

interface StyledIconProps {
  variant?: StyledIconVariant
  icon: ReactNode
}

export function StyledIcon({ variant = 'yellow', icon }: StyledIconProps) {
  return <StyledIconContainer variant={variant}>{icon}</StyledIconContainer>
}
