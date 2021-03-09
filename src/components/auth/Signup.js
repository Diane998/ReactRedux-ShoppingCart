import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  accordionDetails: { margin: '0 1em' },
  textField: {
    '& label.Mui-focused': {
      color: 'blue'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue'
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: theme.palette.common.grey
    },
    '& .MuiFormLabel-root': { color: 'black' },
    width: '100%',
    margin: '0.5em 0'
  },
  input: {
    color: 'black'
  },
  button: {}
}));

const Signup = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      direction='column'
      spacing={3}
      style={{
        width: matchesSM ? '90vw' : matchesMD ? '40vw' : '25vw',
        marginLeft: matchesMD ? '0.8em' : '2em'
      }}
    >
      <Grid item>
        <Typography variant='h1'>CREATE AN ACCOUNT</Typography>
      </Grid>
      <Grid item>
        <form autoComplete='off'>
          <TextField className={classes.textField} label='First Name' />
          <TextField className={classes.textField} label='Last Name' />
          <TextField
            className={classes.textField}
            id='standard-basic'
            label='Email'
          />
          <TextField
            className={classes.textField}
            id='standard-basic'
            label='Password'
          />
        </form>
      </Grid>
      <Grid item container direction='column'>
        <Grid item>
          <Button
            variant='contained'
            color='secondary'
            disableRipple
            disableElevation
            style={{ borderRadius: 0 }}
          >
            CREATE
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Signup;
