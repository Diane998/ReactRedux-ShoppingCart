import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Button,
  useMediaQuery
} from '@material-ui/core';

import TabItemsContainer from '../../containers/TabItemsContainer';
import DrawerContainer from '../../containers/DrawerContainer';

import logo from '../../assets/sc-logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
  toolbar: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '4em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2em'
    }
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  logo: {
    height: '7em',
    [theme.breakpoints.down('md')]: {
      height: '7em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em'
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));

const Header = ({ setTabIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <ElevationScroll>
        <AppBar
          style={{ width: '100vw', left: 0 }}
          position='fixed'
          className={classes.appBar}
        >
          <Toolbar style={{ width: '100vw' }} disableGutters>
            <Button
              disableRipple
              component={Link}
              to='/'
              onClick={() => setTabIndex(0)}
              className={classes.logoContainer}
            >
              <img alt='company logo' className={classes.logo} src={logo} />
            </Button>
            {matchesMD ? <DrawerContainer /> : <TabItemsContainer />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbar} />
    </>
  );
};

export default Header;
