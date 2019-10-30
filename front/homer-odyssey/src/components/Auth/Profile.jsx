import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:      "homer.simpson@wildcodeschool.fr",
            firstname:  "Homer",
            lastname:   "Simpson"
        }
    }

    render() {
        return (
            <>
                <h1>My Profile</h1>
                <List>
                    <ListItem>
                        <ListItemText primary="Email" secondary={this.state.email}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Firstname" secondary={this.state.firstname}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Lastname" secondary={this.state.lastname}/>
                    </ListItem>
                </List>
            </>
        )
    }
}