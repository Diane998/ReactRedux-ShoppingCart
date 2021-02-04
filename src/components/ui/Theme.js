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
      textTransform: 'none',
      color: 'black',
      fontSize: '1rem'
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      color: black,
      lineHeight: 1.5
    },
    h3: {
      fontSize: '2.5rem'
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300
    },
    subtitle2: {
      color: 'white',
      fontWeight: 300,
      fontSize: '1.25rem'
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300
    },
    body2: {
      fontSize: '1.2rem',
      color: black,
      fontWeight: 350
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: arcGrey
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: white,
        fontSize: '1rem'
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
