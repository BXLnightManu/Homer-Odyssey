import React, { Component } from 'react';

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:      "mon@email.com",
            password:   "monPassw0rd",
            firstname:  "James",
            lastname:   "Bond"
        }
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(e) {
        let name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const myState = JSON.stringify(this.state);
        return (
            <>
                <h1>{myState}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.updateField} type="email" name="email" />
                    <input onChange={this.updateField} type="password" name="password" />
                    <input type="password" name="passwordcheck" />
                    <input onChange={this.updateField} type="text" name="firstname" />
                    <input onChange={this.updateField}type="text" name="lastname" />
                    <input type="submit" value="Register" />
                </form>
            </>
        )
    }
}