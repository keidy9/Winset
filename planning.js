const team1 = {
    a: 50,
    b: 51,
    c: 90,
    d: 21,
    e: 31,
}
// total 243

const team2 = {
    a: 60,
    b: 11,
    c: 80,
    d: 51,
    e: 76,    
}
// total 278

const getRandomPoints = (playerWeighting) => {
    return Math.random() * playerWeighting;
    // after getting these points, store it in the server for the player.
}

const getTeamPoints = (team) => {
    let teamPoints = 0;
    for (const player in team) {
        teamPoints += getRandomPoints(team[player]);
    }
    return Math.floor(teamPoints);
}

console.log(getTeamPoints(team1))
console.log(getTeamPoints(team2))