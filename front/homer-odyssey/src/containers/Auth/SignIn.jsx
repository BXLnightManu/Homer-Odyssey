import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:      "",
            password:   ""
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
        const path = "/auth/signin";
        fetch(path, CONFIG)
            .then(res => res.json())
            .then(
                (res) => {
                    this.props.dispatch(
                        {
                            type : "CREATE_SESSION",
                            user: res.user,
                            token : res.token,
                            message : res.flash
                        }
                    )
                    res.redirect && this.props.history.push("/profile");
                }
            )
            .catch(err => {
                console.error(err);
            })
    }

    render() {
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
                </form>
            </>
        )
    }
}
function  mapStateToProps(state) {
    return {
        flash:  state.auth.token,
    }
};
export default connect(mapStateToProps)(SignIn);