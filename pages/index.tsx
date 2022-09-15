import { useEffect, useState } from 'react'
import agentsData from '../data/agents.json'
import randomAgents from '../functions/randomAgents'
import AgentsPerRole from '../functions/randomAgentsPerRole'
import styled from 'styled-components'
import IStyles from '../interfaces/IStyles'

const H1 = styled.h1`
    font-family: 'Kanit', sans-serif;
    text-align: center;
    color: #fff;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const AgentWrapper = styled.div`
    width: 100%;
    justify-content: center;

    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`
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
        backdrop-filter: blur(10px) saturate(100%) contrast(45%)
            brightness(130%);
    }
    &:hover {
        cursor: pointer;
    }
    @media only screen and (max-width: 768px) {
        width: 5em;
    }
`
const AgentPortrait = styled.img`
    max-width: 100%;
`
const Button = styled.button`
    margin-top: 1em;
    padding: 0.5em 2em;
    background-color: #ff4655;
    border: 1px solid #fff;
    border-radius: 4px;
    font-family: 'Kanit', sans-serif;
    font-size: 1.1em;
    color: #fff;
    &:hover {
        background-color: #ff6672;
        cursor: pointer;
    }
`
const CheckBoxLabel = styled.label`
    position: relative;
    width: 42px;
    height: 26px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: '';
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`
const Checkbox = styled.input`
    display: none;
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${CheckBoxLabel} {
        background: #ff4655;
        &::after {
            content: '';
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`
const Label = styled.label`
    font-family: 'Kanit', sans-serif;
    color: #fff;
    margin-left: 0.5em;
`
const SwitchWrapper = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const Credits = styled.footer`
font-family: 'Kanit', sans-serif;
color: #fff;
margin-top: 1em;
`
const Legal = styled.p`
font-family: 'Kanit', sans-serif;
color: #3a5269;
font-size: 0.7em;
text-align: center;
width: 50%;
`

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
