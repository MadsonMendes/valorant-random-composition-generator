import { useEffect, useState } from 'react'
import agentsData from '../data/agents.json'
import randomAgents from '../functions/randomAgents'
import AgentsPerRole from '../functions/randomAgentsPerRole'
import AgentContainer from '../styles/Agent/AgentContainer'
import AgentPortrait from '../styles/Agent/AgentPortrait'
import Button from '../styles/Button'
import Checkbox from '../styles/Checkbox/Checkbox'
import CheckBoxLabel from '../styles/Checkbox/CheckBoxLabel'
import Label from '../styles/Checkbox/Label'
import Credits from '../styles/Texts/Credits'
import H1 from '../styles/Texts/H1'
import Legal from '../styles/Texts/Legal'
import AgentWrapper from '../styles/Wrappers/AgentWrapper'
import SwitchWrapper from '../styles/Wrappers/SwitchWrapper'
import Wrapper from '../styles/Wrappers/Wrapper'

export default function Home() {
  const [agents, setAgents] = useState(randomAgents())
  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    setChecked(!checked)
  }
  useEffect(() => setAgents(randomAgents()), [])
  return (
    <Wrapper>
      <H1>Valorant Random Composition Generator</H1>
      <AgentWrapper>
        {agents.map((agent: string) => {
          const data = agentsData[agent as keyof typeof agentsData]
          return (
            <AgentContainer
              backgroundColor={`linear-gradient(-135deg, #${data.colors[0]} -10%,  #${data.colors[1]} 33%,  #${data.colors[2]} 67%,  #${data.colors[3]} 110%)`}
              key={agent}
            >
              <AgentPortrait
                src={data.displayIcon}
                aria-label={agent}
                alt={agent}
                title={agent}
              ></AgentPortrait>
            </AgentContainer>
          )
        })}
      </AgentWrapper>
      <Button
        onClick={() => {
          checked == false
            ? setAgents(randomAgents())
            : setAgents(AgentsPerRole())
        }}
      >
        New composition
      </Button>
      <SwitchWrapper>
        <Checkbox
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        ></Checkbox>
        <CheckBoxLabel htmlFor="checkbox" />
        <Label htmlFor="checkbox">Get an agent for each role.</Label>
      </SwitchWrapper>
      <Credits> Made with ❤️ by Madson. </Credits>
      <Legal>{`This site is not associated with Riot Games. All rights belong to their respective owners. Valorant Random Composition Generator was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.`}</Legal>
    </Wrapper>
  )
}
