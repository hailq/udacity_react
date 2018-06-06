import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
    const { user, showsGame } = props;
    return (
        <li>{user.userName} played {showsGame ? user.games : '*'} games</li>
    )
}
User.propTypes = {
    user: PropTypes.object.isRequired,
    showsGame: PropTypes.bool.isRequired,
}

export default User;