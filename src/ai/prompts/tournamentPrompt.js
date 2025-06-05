export const createTournamentPrompt = (tournamentName) => `
Erstelle einen Turnierplan für das Turnier "${tournamentName}" mit Gruppenphase und KO-Runde.
Berücksichtige 16 Teams, spiele in 4 Gruppen mit je 4 Teams.
`;

export const updateTournamentPrompt = (tournamentId, changes) => `
Aktualisiere das Turnier mit der ID ${tournamentId} mit folgenden Änderungen:
${changes}
`;



