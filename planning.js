// have tiers of players from 1-3, tier 1 is 10-20 points, tier 2 is 13-25 points, tier 3 is 15-30 points.
// do math.random() * the range of points + the lower cap of points (ex. for tier 2 25-13 = 12 -----> (math.random() * 12) + 13) 
// calculate odds by taking average tier of players, calculated average points, then divide by another team.
// calculate parlay odds by multiplying the chances plus adding some other multiply factor to incentivise parlays. 
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

// console.log(getTeamPoints(team1))
// console.log(getTeamPoints(team2))


//database tables:
/**
 * 1.TEAMS
 *  -id
 *  -team name
 *  -status? (active or eliminated)
 *  -
 */


/**
 * players {
 *  id      playerName         player tier    team id (FOREIGN KEY)
 *  ..
 *  ..
 *  ..
 *  ..
 * }
 */


/**
 * teams {
 *  id      team name       status (active or eliminated)
 * }
 */