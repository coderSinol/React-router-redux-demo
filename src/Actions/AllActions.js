import {allConstants} from '../Constants/AllConstants.js';
import {allServices} from '../Services/AllServices.js';

export const allActions = {
    addStudent,
    viewStudents
};

function addStudent(student) {
  return dispatch => {
      dispatch(request(student));
      allServices.addStudent(student);
      dispatch(success(student));
  };
  function request(student) { return { type: allConstants.ADD_PLAYER_REQUEST, student } }
  function success(student) { return { type: allConstants.ADD_PLAYER_SUCCESS, student } }
  function failure(error) { return { type: allConstants.ADD_PLAYER_FAILURE, error } }
}

function viewStudents() {
  return dispatch => {
      dispatch(request());
      var students = allServices.viewStudents();
      dispatch(success(students));
  };
  function request() { return { type: allConstants.VIEW_ALL_PLAYERS_REQUEST } }
  function success(students) { return { type: allConstants.VIEW_ALL_PLAYERS_SUCCESS, students } }
  function failure(error) { return { type: allConstants.VIEW_ALL_PLAYERS_FAILURE, error } }
}
