import React, { Component } from 'react';
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
            variant:    "",
            open:       false
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
                res => this.setState({flash: res.flash, variant: res.variant, open: res.open}),
                err => this.setState({flash: err.flash, variant: err.variant, open: err.open})
            )
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({open:false});
    };

    render() {
        const myState = JSON.stringify(this.state.flash);
        return (
            <>
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
                    variant={this.state.variant}
                    onClose={this.handleClose}
                    message={myState}
                />
            </>
        )
    }
}