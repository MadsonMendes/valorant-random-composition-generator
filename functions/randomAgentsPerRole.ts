import shuffle from './fisherYates'

export default function AgentsPerRole() {
    const agents = [
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

    shuffle(agents)

    const duelist = ['Raze', 'Phoenix', 'Reyna', 'Neon', 'Yoru', 'Jett']
    const initiator = ['Fade', 'Breach', 'Skye', 'Sova', 'KAY/O']
    const controller = ['Viper', 'Astra', 'Brimstone', 'Omen']
    const sentinel = ['Chamber', 'Cypher', 'Killjoy', 'Sage']

    shuffle(duelist)
    shuffle(initiator)
    shuffle(controller)
    shuffle(sentinel)

    function complete() {
        let filteredAgents = agents
        filteredAgents.forEach((e, i) => {
            if (
                e == duelist[0] ||
                e == initiator[0] ||
                e == controller[0] ||
                e == sentinel[0]
            ) {
                filteredAgents.splice(i, 1)
                if (
                    filteredAgents[0] == duelist[0] ||
                    filteredAgents[0] == initiator[0] ||
                    filteredAgents[0] == controller[0] ||
                    filteredAgents[0] == sentinel[0]
                ) {
                    shuffle(filteredAgents)
                    return filteredAgents[0]
                } else {
                    return filteredAgents[0]
                }
            }
        })

        return filteredAgents[0]
    }

    const AgentsPerRole = shuffle([
        duelist[0],
        initiator[0],
        controller[0],
        sentinel[0],
        complete(),
    ])
    return AgentsPerRole
}
