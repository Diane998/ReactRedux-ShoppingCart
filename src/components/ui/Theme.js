import { createMuiTheme } from '@material-ui/core/styles';

const white = '#ffff',
  arcBlue = '#0B72B9',
  arcOrange = '#FFBA60',
  arcGrey = '#868686',
  black = 'black';

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      grey: arcGrey,
      black: 'black'
    },
    primary: {
      main: white
    },
    secondary: {
      main: arcBlue
    }
  },
  typography: {
    tab: {
      fontWeight: 400,
      textTransform: 'none',
      color: 'black',
      fontSize: '1em'
    },
    h1: {
      fontWeight: 700,
      fontSize: '3em',
      color: black,
      lineHeight: 1.5
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5em',
      color: black,
      lineHeight: 1.5
    },
    h3: {
      fontWeight: 700,
      fontSize: '2em',
      color: black,
      lineHeight: 1.5
    },
    h4: {
      fontSize: '1.5em',
      fontWeight: 400
    },
    subtitle1: {
      fontSize: '1.25em',
      fontWeight: 300
    },
    subtitle2: {
      color: 'white',
      fontWeight: 300,
      fontSize: '1.2em'
    },
    body1: {
      fontSize: '1.25em',
      color: arcGrey,
      fontWeight: 300
    },
    body2: {
      fontSize: '1.2em',
      color: black,
      fontWeight: 350
    },
    caption: {
      fontSize: '1em',
      fontWeight: 300,
      color: arcGrey
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: white,
        fontSize: '1em'
      }
    },
    MuiInput: {
      root: {
        color: white,
        fontWeight: 300
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${arcBlue}`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${arcBlue}`
        }
      }
    }
  }
});
