// There's an algorithms tournament taking place in which teams of programmers
// compete against each other to solve algorithmic problems as fast as possible.
// Teams compete in a round robin, where each team faces off against all other
// teams. Only two teams compete against each other at a time, and for each
// competition, one team is designated the home team, while the other team is the
// away team. In each competition there's always one winner and one loser; there
// are no ties. A team receives 3 points if it wins and 0 points if it loses. The
// winner of the tournament is the team that receives the most amount of points.

// Given an array of pairs representing the teams that have competed against each
// other and an array containing the results of each competition, write a
// function that returns the winner of the tournament. The input arrays are named
// competitions and the results respecitvly.The competitions array has elements
// in the form of[homeTeam, awayTeam], where each team is a string of at most
// 30 characters representing the name of the team.

// The results  array contains information about the winner of each corresponding competition in the
// competitions array.Specifically, the results[i] denotes the winner of competetions[i],
// where a 1 in the results array means that the home team in the corresponding competition won
// and a 0 means that the away team won.

// It's guaranteed that exactly one team will win the tournament and that each
// team will compete against all other teams exactly once. It's also guaranteed
// that the tournament will always have at least two teams.

// Sample input

// competitions =
// [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"]
// ]

// results = [0,0,1]

// Sample Output
// 'Python'

//Answer:
function tournamentWinner(competitions, results) {
  // Write your code here.
  // Each team will face every team
  // Only two team will face each other at a time
  // one team is the home and the other is away
  // There is always one winner, no ties
  // When a team wins, they get 3 points, else 0
  // The team with most amount of points will win the tournment.

  //input
  // A 2d containing the matches
  // an array containing the 0 or 1
  // if 0 = away won
  // if 1 = home won

  //output
  // the team with the most points (string)

  let obj = {};

  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 0) {
      if (obj[competitions[i][1]]) {
        obj[competitions[i][1]]++;
      } else {
        obj[competitions[i][1]] = 1;
      }
    } else {
      if (obj[competitions[i][0]]) {
        obj[competitions[i][0]]++;
      } else {
        obj[competitions[i][0]] = 1;
      }
    }
  }
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}
