import { crudPlayer } from './CrudPlayer.reducer.js';
import { viewPlayers } from './ViewPlayers.reducer.js'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  crudPlayer,
  viewPlayers
});

export default rootReducer;
