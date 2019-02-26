import { allConstants } from '../Constants/AllConstants';

const initialState = { player: {}};

export function crudPlayer(state = initialState, action) {

  switch (action.type) {
    case allConstants.ADD_PLAYER_REQUEST:
      return { player: {} };
    case allConstants.ADD_PLAYER_SUCCESS:
      return { player: action.player};
    case allConstants.ADD_PLAYER_FAILURE:
      return { player: {} };
    default:
      return state
  }

}
