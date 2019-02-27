
export const allServices = {
    addPlayer,
    viewPlayers
};

function addPlayer(player) {
  if (player) {
      var players = JSON.parse(localStorage.getItem('players'));
      if(players === null){
        players = [];
      }
      players.push(player);
      localStorage.setItem('players', JSON.stringify(players));
      return player;
  }
  return null;
}

function viewPlayers(){
  var players = JSON.parse(localStorage.getItem('players'));
  return players === null ? [] : players;
}
