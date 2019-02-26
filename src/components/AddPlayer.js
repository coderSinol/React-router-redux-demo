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
          country: ''
      };
  }

  handleChange(e) {
      this.setState({...this.state, [e.target.name]: e.target.value})
  }

  handleSubmit(e) {
      e.preventDefault();
      const { firstName, lastName, country } = this.state;
      const { dispatch } = this.props;
      dispatch(allActions.addPlayer(this.state));
      this.setState({
          firstName: '',
          lastName: '',
          country: ''
      });

  }

  render() {
    const { classes, player, allPlayers } = this.props;
    return (
      <div>
        <MenuBar/>
        <h1>Add new player</h1>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <TextField name="firstName" value={this.state.firstName} label="First Name" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          <TextField name="lastName" value={this.state.lastName} label="Last Name" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          <TextField name="country" value={this.state.country} label="Country" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          <div>
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Add Player
            </Button>
          </div>
        </form>
        <div className={classes.gapSmall} style={{display:Object.keys(player).length === 0 ? 'none' : ''}}>
          <h3>Last added player</h3>
          <span>
            <p>{'First Name: ' + player.firstName}</p>
            <p>{'Last Name: ' + player.lastName}</p>
            <p>{'Country: ' + player.country}</p>
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
    const { player, allPlayers } = state.crudPlayer;
    return {
        player, allPlayers
    };
}

export default connect(mapStateToProps)(withStyles(styles)(AddPlayer));
