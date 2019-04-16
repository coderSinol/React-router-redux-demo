import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  menuItem: {
    marginRight: 15,
    color: '#fff',
    textDecoration: 'none'
  },
};

class MenuBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <a className={classes.menuItem} href="/">Home</a>
            <a className={classes.menuItem} href="/add-student">Add Student</a>
            <a className={classes.menuItem} href="/view-students">View Students</a>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
