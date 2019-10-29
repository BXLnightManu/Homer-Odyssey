import React, { Component } from 'react';

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:      "",
            password:   "",
            firstname:  "",
            lastname:   "",
            flash:      ""
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
        const CONFIG = {
            method:     "POST",
            headers:    new Headers({"Content-Type": "Application/json"}),
            body:       JSON.stringify(this.state)
        };
        const path = "/auth/signup";
        fetch(path, CONFIG)
            .then(res => res.json())
            .then(
                res => this.setState({flash: res.flash}),
                err => this.setState({flash: err.flash})
            )
    }

    render() {
        const myState = JSON.stringify(this.state.flash);
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