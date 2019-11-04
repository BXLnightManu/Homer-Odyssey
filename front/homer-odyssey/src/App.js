import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { SignUp } from './containers/Auth';
import SignIn from './containers/Auth/SignIn';
import Profile from './containers/Auth/Profile';
import requiredAuth from './hoc/requireAuth';
import requireNotAuth from './hoc/requireNotAuth';
import './App.css';

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    height: "100%"
  },
  paper: {
    margin: 32,
    width: "100%"
  },
  grid: {
    alignItems: "center"
  }
})

export default function App() {
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.root}>
        <Paper elevation={4} className={classes.paper}>
                <Router>
                  <Switch>
                    <Route exact path="/" component={requireNotAuth(SignIn)} />
                    <Route exact path="/signin" component={requireNotAuth(SignIn)} />
                    <Route exact path="/signup" component={requireNotAuth(SignUp)} />
                    <Route exact path="/profile" component={requiredAuth(Profile)} />
                  </Switch>
                </Router>
        </Paper>
    </Grid>
  );
}
