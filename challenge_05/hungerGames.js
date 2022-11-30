export const hungerGames = (participants) => {
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

export const hungerGamesUsingMaths = (participants) => {
  const winnerIdx = 2 * (participants.length - 2 ** Math.floor(Math.log2(participants.length)))
  const winner = participants[winnerIdx]
  return `${winner}-${winnerIdx}`
}

const killParticipants = (participants) => {
  const aliveParticipants = participants.filter((_, i) => i % 2 === 0)
  if (aliveParticipants.length === 1) return aliveParticipants
  if (participants.length % 2 !== 0) aliveParticipants.shift()
  return aliveParticipants
}
