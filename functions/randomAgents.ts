import shuffle from './fisherYates'

var agents = [
  'Fade',
  'Breach',
  'Raze',
  'Chamber',
  'KAY/O',
  'Skye',
  'Cypher',
  'Sova',
  'Killjoy',
  'Viper',
  'Phoenix',
  'Astra',
  'Brimstone',
  'Neon',
  'Yoru',
  'Sage',
  'Reyna',
  'Omen',
  'Jett',
]

export default function randomAgents() {
  shuffle(agents)
  const randomAgents = agents.slice(0, 5)
  return randomAgents
}
