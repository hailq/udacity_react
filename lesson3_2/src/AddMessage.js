import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {

    state = {
        value: ''
    }

    /*
      If the user did not type anything, he/she should not be
      allowed to submit.
      */
    isDisabled = () => {
        const { value } = this.state;
        return value === '';
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { onMessageAdded, user } = this.props;
        const { value } = this.state;

        onMessageAdded(user.username, value);

        // Clear the message input box
        this.setState((currentState) => ({
            value: ''
        }));
    }

    handleMessageChange = (event) => {
        const messageText = event.target.value;

        this.setState((currentState) => ({
            value: messageText
        }));
    }

    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter your message..."
                        value={this.state.value}
                        onChange={this.handleMessageChange}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

AddMessage.propTypes = {
    onMessageAdded: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
}

export default AddMessage;