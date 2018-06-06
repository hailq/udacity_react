import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const MessageList = (props) => {

    const { messages, user } = props;

    return (
        <ul className="message-list">
            {
                messages.map(
                    (message, index) => (
                        <Message
                            key={index}
                            message={message}
                            user={user}
                        />
                    )
                )
            }
        </ul>
    );
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
}

export default MessageList;