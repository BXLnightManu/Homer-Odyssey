import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { TextField, Button, Snackbar } from '@material-ui/core';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:      "",
            password:   "",
            flash:"",
            open: false,
            redirect: false
        }
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
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
        const path = "/auth/signin";
        fetch(path, CONFIG)
            .then(res => res.json())
            .then(
                (res) => this.setState({redirect: res.redirect, open: res.open, flash: res.flash})
            )
            .catch(err => {
                console.error(err);
            })
    }

    handleClose (reason) {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({open:false});
      };

    render() {
        const myState = JSON.stringify(this.state.flash);
        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to="/profile" />
        } else {
            return (
                <>
                    <Button id="button" variant="contained" color="secondary" ><Link id="link" to="/signup">Sign Up</Link></Button>
                    <h1>Sign In</h1>
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
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                        <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        autoHideDuration={5000}
                        onClose={this.handleClose}
                        open={this.state.open}
                        message={myState}
                    />
                    </form>
                </>
            )
        }
    }
}