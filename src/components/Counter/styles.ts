import { styled } from 'styled-components'

export const CounterContainer = styled.div`
  width: 7.2rem;
  max-width: 7.2rem;
  height: 3.8rem;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.8rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;

  .counter-number {
    font-size: 1.6rem;
    margin: 0;
    color: ${(props) => props.theme['base-title']};
  }

  .counter-btn {
    background: none;
    border: none;
    width: 1.4rem;
    height: 1.4rem;
    color: ${(props) => props.theme.purple};

    transition: color 0.2s;

    cursor: pointer;
  }

  .counter-btn:hover {
    background: none;
    color: ${(props) => props.theme['purple-dark']};
  }
`
