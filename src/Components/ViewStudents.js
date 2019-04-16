import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from './MenuBar';
import { allActions } from '../Actions/AllActions';
import { connect } from 'react-redux';

const styles = theme => ({
  tableContainer: {
    width: '50%',
    margin: 'auto'
  }
});

class ViewPlayers extends React.Component {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(allActions.viewStudents());
  }

  render() {
    const {classes, students } = this.props;
    return (
      <div>
        <MenuBar/>
        <h1>All students</h1>
        <div>
          <table className={classes.tableContainer} style={{display:(students.length === 0 || students === undefined) ? 'none' : ''}}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Country</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map(( student, index ) => {
                return (
                  <tr>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.country}</td>
                    <td>{student.course}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ViewPlayers.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const { students } = state.viewStudents;
    return {
        students
    };
}

export default connect(mapStateToProps)(withStyles(styles)(ViewPlayers));
