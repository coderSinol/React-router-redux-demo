import {allConstants} from '../Constants/AllConstants.js';
import {allServices} from '../Services/AllServices.js';

export const allActions = {
    addPlayer,
    viewPlayers
};

function addPlayer(player) {
  return dispatch => {
      dispatch(request(player));
      allServices.addPlayer(player);
      dispatch(success(player));
  };
  function request(player) { return { type: allConstants.ADD_PLAYER_REQUEST, player } }
  function success(player) { return { type: allConstants.ADD_PLAYER_SUCCESS, player } }
  function failure(error) { return { type: allConstants.ADD_PLAYER_FAILURE, error } }
}

function viewPlayers() {
  return dispatch => {
      dispatch(request());
      var players = allServices.viewPlayers();
      dispatch(success(players));
  };
  function request() { return { type: allConstants.VIEW_ALL_PLAYERS_REQUEST } }
  function success(players) { return { type: allConstants.VIEW_ALL_PLAYERS_SUCCESS, players } }
  function failure(error) { return { type: allConstants.VIEW_ALL_PLAYERS_FAILURE, error } }
}
