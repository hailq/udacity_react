import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewUserForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: '',
        games: 0,
        error: ''
    }

    resetErrorMessage = () => {
        this.setState(currentState => ({
            error: ''
        }));
    }

    validateUserName = (userName) => {
        const users = this.props.users;
        for (let u of users) {
            if (u.userName === userName) {
                return false;
            }
        }

        return true;
    }

    addUser = (event) => {
        event.preventDefault();

        this.resetErrorMessage();

        const { userName, firstName, lastName } = this.state;

        // Check if user name is existed
        if (this.validateUserName(userName)) {
            const user = {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                games: 0
            }

            this.props.onAddUser(user);
        } else {
            this.setState(currentState => ({
                error: 'This username already exists'
            }))
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name
        this.setState(currentState => ({
            [name]: target.value
        }));
    }

    isDisabled = () => {
        const { userName, firstName, lastName } = this.state;

        if (userName === '' || firstName === '' || lastName === '') {
            return true;
        }

        return false;

    }

    render() {
        return (
            <form onSubmit={this.addUser}>
                <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                <input type="text" placeholder="Username" name="userName" value={this.state.userName} onChange={this.handleInputChange} />
                <button disabled={this.isDisabled()}>Add</button>
                <p className="error">{this.state.error}</p>
            </form>
        );
    }
}
NewUserForm.propTypes = {
    users: PropTypes.array.isRequired,
    onAddUser: PropTypes.func.isRequired,
}

export default NewUserForm;