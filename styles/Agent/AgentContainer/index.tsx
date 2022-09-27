import styled from 'styled-components'
import IStyles from '../../../interfaces/IStyles'

const AgentContainer = styled.div<IStyles>`
  width: 10em;
  height: auto;
  background: ${(props) => props.backgroundColor};
  border-radius: 8px;
  margin: 0.5em;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  &:after {
    backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    width: 5em;
  }
`

export default AgentContainer
