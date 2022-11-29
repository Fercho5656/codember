const hungerGames = (participants) => {
  const indexedParticipants = participants.map((participant, index) => ({
    name: participant,
    index
  }))
  let aliveParticipants = indexedParticipants
  while (aliveParticipants.length > 1) {
    aliveParticipants = killParticipants(aliveParticipants)
  }
  const winner = aliveParticipants[0]
  return `${winner.name}-${winner.index}`
}

const killParticipants = (participants) => {
  const aliveParticipants = participants.filter((_, i) => i % 2 === 0)
  if (aliveParticipants.length === 1) return aliveParticipants
  if (participants.length % 2 !== 0) aliveParticipants.shift()
  return aliveParticipants
}

export default hungerGames
