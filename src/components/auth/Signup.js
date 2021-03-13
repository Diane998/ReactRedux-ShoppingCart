import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

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
  button: {}
}));

const Signup = () => {
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
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { fullName, email, password, confirmPassword } = userCredentials;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName: fullName });

      this.setUserCredentials({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
      <Grid item>
        <Typography variant='h1'>CREATE AN ACCOUNT</Typography>
      </Grid>
      <Grid item>
        <form
          autoComplete='off'
          className='sing-up form'
          onSubmit={handleSubmit}
        >
          <TextField
            className={classes.textField}
            type='text'
            label='Full Name'
            name='fullName'
            value={fullName}
            required
            onChange={handleChange}
            InputProps={{
              className: classes.input
            }}
          />
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
          <TextField
            className={classes.textField}
            type={values.showPassword ? 'text' : 'password'}
            label='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
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
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            disableRipple
            disableElevation
            style={{ borderRadius: 0, margin: '1em 0' }}
          >
            CREATE
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
