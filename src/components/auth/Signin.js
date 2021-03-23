import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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
  button: { ...theme.button, margin: '1em 0' }
}));

const Signin = ({ history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [values, setValues] = useState({
    showPassword: false
  });

  const onClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setUserCredentials({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

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
      <Grid item container>
        <Typography variant='h1'>LOGIN</Typography>
      </Grid>
      <Grid item>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            type='email'
            label='Email'
            name='email'
            value={email}
            required
            onChange={handleChange}
            InputProps={{
              className: classes.input
            }}
          />
          <TextField
            className={classes.textField}
            type={values.showPassword ? 'text' : 'password'}
            label='Password'
            name='password'
            value={password}
            required
            onChange={handleChange}
            InputProps={{
              className: classes.input,
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    disableRipple
                    aria-label='toggle password visibility'
                    onClick={onClickShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Grid item container style={{ margin: '1em 0' }}>
            <Grid item>
              <Button
                className={classes.button}
                type='submit'
                variant='outlined'
                color='secondary'
                disableRipple
                disableElevation
                style={{
                  marginRight: '1em',
                  marginBottom: matchesMD ? '0.8em' : 0
                }}
              >
                SIGN IN
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                onClick={signInWithGoogle}
                variant='contained'
                color='secondary'
                disableRipple
                disableElevation
              >
                SIGN IN WITH GOOGLE
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item container direction='column'>
        <Grid item>
          <Button
            className={classes.button}
            disableRipple
            onClick={() => history.push('/account/sign-up')}
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Signin;
