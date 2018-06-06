import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';

class UserList extends Component {
  state = {
    showsGame: true
  }

  toggleShowsGame = () => {
    this.setState(currentState => ({
      showsGame: currentState.showsGame ? false : true
    }));
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Users</h1>
        {
          (users && users.length > 0) &&
          (
            <button className="smallButton" onClick={this.toggleShowsGame}>
              {this.state.showsGame ? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}
            </button>)
        }
        
        <ul>
          {
            users.map(u => (
              <User key={u.userName} user={u} showsGame={this.state.showsGame} />
            ))
          }
        </ul>
      </div>
    );
  }
}
UserList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserList;