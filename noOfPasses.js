/**********
There are N friends sitting in a circle. They are numbered clockwise 1 to N. Game starts with Player 1 receiving the ball.
A player needs to pass the ball to other player based on some conditions.
1. if he is receiving ball for pth time, he passes that ball to person L placed to left if p is even or L places right if p is odd
2. if any player receives the ball M times then game is over.

Given the values of N, L and M, you have to tell the number of times the ball is passed among players.

Input specifications:
First input is number of playes(N) 3<=N<=1000
Second input is maximum number of times a player receive ball(M) 3<=M<=1000
Third input is a number(L)

Output Specification:
The function should return the number of times the ball is passed among players. In case of any invalid input, the function should return -1

Example:
Inputs: N=5, M=3, L=2
output: 10

Explanation:
First, player 1 gets the ball. Since he has held the ball 1 time, he passes the ball to player 4, who is two places to his right......
***********/
function numberOfPasses(N, M, L){
  if(N<3||N>1000||M<3||M>1000){
    return -1;
  }
  var players={},currentPlayer=1,totalPasses=0;
  while(true){
    if(players[currentPlayer]){
      players[currentPlayer] += 1;
    }else{
      players[currentPlayer] = 1;
    }
    if(players[currentPlayer] === M){
      players[currentPlayer] -= 1;
      break;
    }
    setCurrentPlayer(players[currentPlayer]);
  }
  for(var pl in players){
    totalPasses += players[pl];
  }
  return totalPasses;

  function setCurrentPlayer(value){
    if(value%2===0){
      for(var i=0;i<=L;i++){
        currentPlayer -= 1;
        if(currentPlayer < 1){
          currentPlayer = N;
        }
      }
    }else{
      for(var i=0;i<=L;i++){
        currentPlayer += 1;
        if(currentPlayer > N){
          currentPlayer = 1;
        }
      }
    }
  }
}

console.log(numberOfPasses(5, 3, 2));
