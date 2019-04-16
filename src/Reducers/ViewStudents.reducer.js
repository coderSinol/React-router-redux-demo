import { allConstants } from '../Constants/AllConstants';

const initialState = { students: []};

export function viewStudents(state = initialState, action) {

  switch (action.type) {
    case allConstants.VIEW_ALL_PLAYERS_REQUEST:
      return { students: [] };
    case allConstants.VIEW_ALL_PLAYERS_SUCCESS:
      return { students: action.students};
    case allConstants.VIEW_ALL_PLAYERS_FAILURE:
      return { students: [] };
    default:
      return state
  }

}
