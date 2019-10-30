import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Profile, SignIn, SignUp } from './components/Auth';
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
            <Grid container item xs={12} className={classes.grid}>
              <Grid  item  xs={12}  sm={6}>
                <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="homer-simpson" />
              </Grid>
              <Grid item  xs={12}  sm={6}>
                <Router>
                  <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/profile" component={Profile} />
                  </Switch>
                </Router>
              </Grid>
            </Grid>
        </Paper>
    </Grid>
  );
}
