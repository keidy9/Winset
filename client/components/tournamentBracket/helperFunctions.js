export const getRandomPoints = (playerWeighting) => {
    if (playerWeighting === 1) return Math.floor(Math.random() * 17) + 5;
    if (playerWeighting === 2) return Math.floor(Math.random() * 16) + 7;
    if (playerWeighting === 3) return Math.floor(Math.random() * 15) + 9;
    if (playerWeighting === 4) return Math.floor(Math.random() * 14) + 11;
    if (playerWeighting === 5) return Math.floor(Math.random() * 13) + 13;
    // after getting these points, store it in the server for the player.
}

export const getTeamPoints = (team) => {
    let teamPoints = 0;
    for (const player in team) {
        teamPoints += getRandomPoints(team[player]);
    }
    return Math.floor(teamPoints);
}