import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { SignUp } from './components/SignUp';
import './App.css';

function App() {
  return (
    <Grid container alignItems='center' style={{ height:  '100%' }}>
      <Grid item xs={12}>
        <Paper elevation={4} style={{ margin:  32 }}>
          <Grid container>
            <Grid container item xs={12} alignItems='center' justify='center'>
              <Grid  item  xs={12}  sm={6}>
                <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="homer-simpson" />
              </Grid>
              <Grid item  xs={12}  sm={6}>
                <SignUp />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
