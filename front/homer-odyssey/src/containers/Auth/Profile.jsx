import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText, Grid } from '@material-ui/core';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        const CONFIG = {
            method:     "GET",
            headers:    new Headers({"Authorization": 'Bearer '  +  this.props.token}),
        };
        const path = "/profile";
        fetch(path, CONFIG)
            .then(res  => {
                if (res.ok)
                    return  res.json()
                else
                    throw  new  Error(res.statusText)
            })
            .then(res  => {this.setState({ profile:  res })})
            .catch()
    }

    render() {
        return (
            <Grid container item xs={12} alignItems="center">
                <Grid  item  xs={12}  sm={6}>
                    <img src={this.state.profile.image} alt="homer-simpson" />
                </Grid>
                <Grid item  xs={12}  sm={6}>
                    <h1>My Profile</h1>
                    <List>
                        <ListItem>
                            <ListItemText primary="Email" secondary={this.state.profile.email}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Firstname" secondary={this.state.profile.firstname}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Lastname" secondary={this.state.profile.lastname}/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        )
    }
}
function  mapStateToProps(state) {
    return {
        token:  state.auth.token,
    }
};
export default connect(mapStateToProps)(Profile);