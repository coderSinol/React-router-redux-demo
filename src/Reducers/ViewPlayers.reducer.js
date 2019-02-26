import { allConstants } from '../Constants/AllConstants';

const initialState = { players: []};

export function viewPlayers(state = initialState, action) {

  switch (action.type) {
    case allConstants.VIEW_ALL_PLAYERS_REQUEST:
      return { players: [] };
    case allConstants.VIEW_ALL_PLAYERS_SUCCESS:
      return { players: action.players};
    case allConstants.VIEW_ALL_PLAYERS_FAILURE:
      return { players: [] };
    default:
      return state
  }

}
