import { allConstants } from '../Constants/AllConstants';

const initialState = { student: {}};

export function crudStudent(state = initialState, action) {

  switch (action.type) {
    case allConstants.ADD_PLAYER_REQUEST:
      return { student: {} };
    case allConstants.ADD_PLAYER_SUCCESS:
      return { student: action.student};
    case allConstants.ADD_PLAYER_FAILURE:
      return { student: {} };
    default:
      return state
  }

}
