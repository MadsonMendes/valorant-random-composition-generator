import styled from 'styled-components'

const AgentWrapper = styled.div`
  width: 100%;
  justify-content: center;

  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export default AgentWrapper
