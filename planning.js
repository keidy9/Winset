// have tiers of players from 1-3, tier 1 is 10-20 points, tier 2 is 13-25 points, tier 3 is 15-30 points.
// do math.random() * the range of points + the lower cap of points (ex. for tier 2 25-13 = 12 -----> (math.random() * 12) + 13)
// calculate odds by taking average tier of players, calculated average points, then divide by another team.
// calculate parlay odds by multiplying the chances plus adding some other multiply factor to incentivise parlays. 


/**
 * Here's a JavaScript implementation of the Durstenfeld shuffle, an optimized version of Fisher-Yates:

// Randomize array in-place using Durstenfeld shuffle algorithm 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
 */



/**
 * tier 1 = 5-21
 * tier 2 = 7-22
 * tier 3 = 9-23
 * tier 4 = 11-24
 * tier 5 = 13-25
 */


const team1 = {
    a: 1,
    b: 1,
    c: 2,
    d: 3,
    e: 1,
}
// total 243

const team2 = {
    a: 5,
    b: 5,
    c: 5,
    d: 5,
    e: 5,
}
// total 278

const getRandomPoints = (playerWeighting) => {
    if (playerWeighting === 1) return Math.floor(Math.random() * 18) + 5;
    if (playerWeighting === 2) return Math.floor(Math.random() * 16) + 7;
    if (playerWeighting === 3) return Math.floor(Math.random() * 15) + 9;
    if (playerWeighting === 4) return Math.floor(Math.random() * 14) + 11;
    if (playerWeighting === 5) return Math.floor(Math.random() * 13) + 13;
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