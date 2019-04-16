import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuBar from './MenuBar';
import { allActions } from '../Actions/AllActions';
import { connect } from 'react-redux';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  gapSmall: {
    marginTop:50,
  }
});

class AddPlayer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          country: '',
          course:''
      };
  }

  handleChange(e) {
      this.setState({...this.state, [e.target.name]: e.target.value})
  }

  handleSubmit(e) {
      e.preventDefault();
      const { dispatch } = this.props;
      dispatch(allActions.addStudent(this.state));
      this.setState({
          firstName: '',
          lastName: '',
          country: '',
          course:''
      });

  }

  render() {
    const { classes, student } = this.props;
    return (
      <div>
        <MenuBar/>
        <h1>Add new student</h1>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <TextField name="firstName" value={this.state.firstName} label="First Name" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          <TextField name="lastName" value={this.state.lastName} label="Last Name" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          <TextField name="country" value={this.state.country} label="Country" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          <TextField name="course" value={this.state.course} label="Course" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          <div>
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Add Student
            </Button>
          </div>
        </form>
        <div className={classes.gapSmall} style={{display:Object.keys(student).length === 0 ? 'none' : ''}}>
          <h3>Last added student</h3>
          <span>
            <p>{'First Name: ' + student.firstName}</p>
            <p>{'Last Name: ' + student.lastName}</p>
            <p>{'Country: ' + student.country}</p>
            <p>{'Course: ' + student.course}</p>
          </span>
        </div>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const { student } = state.crudStudent;
    return {
        student
    };
}

export default connect(mapStateToProps)(withStyles(styles)(AddPlayer));
