import React from 'react';
import PropTypes from 'prop-types';

import MessageList from './MessageList';
import AddMessage from './AddMessage';

const ChatWindow = (props) => {

    const { messages, user, onMessageAdded } = props;

    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <MessageList messages={messages} user={user} />

            <AddMessage onMessageAdded={onMessageAdded} user={user} />

        </div>
    )
}

ChatWindow.propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    onMessageAdded: PropTypes.func.isRequired,
}

export default ChatWindow;