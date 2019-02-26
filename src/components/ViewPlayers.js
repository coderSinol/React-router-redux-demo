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
    dispatch(allActions.viewPlayers());
  }

  render() {
    const {classes, players } = this.props;
    return (
      <div>
        <MenuBar/>
        <h1>All players</h1>
        <div>
          <table className={classes.tableContainer} style={{display:players.length === 0 ? 'none' : ''}}>
            <thead className="blue-grey lighten-4">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {players.map(( player, index ) => {
                return (
                  <tr>
                    <td>{player.firstName}</td>
                    <td>{player.firstName}</td>
                    <td>{player.firstName}</td>
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
    const { players } = state.viewPlayers;
    return {
        players
    };
}

export default connect(mapStateToProps)(withStyles(styles)(ViewPlayers));
