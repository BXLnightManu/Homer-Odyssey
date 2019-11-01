import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { TextField, Button, Snackbar } from '@material-ui/core';

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:      "",
            password:   "",
            firstname:  "",
            lastname:   "",
            flash:      "",
            open:       false,
            redirect:   false
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
                res => this.setState({flash: res.flash, open: res.open, redirect: res.redirect}),
                err => this.setState({flash: err.flash, open: err.open, redirect: err.redirect})
            )
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        const myState = JSON.stringify(this.state.flash);
        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <>
                    <Button id="button" variant="contained" color="secondary" ><Link id="link" to="/signin">Sign In</Link></Button>
                    <h1>Sign Up</h1>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <TextField
                            onChange={this.updateField}
                            required
                            fullWidth
                            id="email"
                            type="email"
                            name="email"
                            label="E-mail"
                            margin="normal"
                        />
                        <TextField
                            onChange={this.updateField}
                            required
                            fullWidth
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            margin="normal"
                        />
                        <TextField
                            onChange={this.updateField}
                            required
                            fullWidth
                            id="password-confirm"
                            type="password"
                            name="password"
                            label="Confirm password"
                            margin="normal"
                        />
                        <TextField
                            onChange={this.updateField}
                            required
                            fullWidth
                            id="firstname"
                            type="text"
                            name="firstname"
                            label="Firstname"
                            margin="normal"
                        />
                        <TextField
                            onChange={this.updateField}
                            required
                            fullWidth
                            id="lastname"
                            type="text"
                            name="lastname"
                            label="Lastname"
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </form>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        autoHideDuration={6000}
                        open={this.state.open}
                        message={myState}
                    />
                </>
            )
        }
    }
}