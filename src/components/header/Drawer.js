import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { makeStyles } from '@material-ui/styles';
import { routes } from './routes';

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawer: { backgroundColor: theme.palette.primary },
  drawerItemText: {
    ...theme.typography.tab,
    color: 'black',
    opacity: 0.7
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  }
}));

const renderList = (
  setDrawerOpen,
  setTabIndex,
  tabIndex,
  classes,
  currentUser
) =>
  routes.map(({ name, link }, i) =>
    name === 'Cart' ? (
      <ListItem
        divider
        key={i}
        button
        component={Link}
        to={link}
        onClick={() => {
          setDrawerOpen(false);
          setTabIndex(i);
        }}
        selected={tabIndex === i}
        classes={{ selected: classes.drawerItemSelected }}
      >
        <ListItemIcon>
          <ShoppingCartOutlinedIcon />
        </ListItemIcon>
      </ListItem>
    ) : currentUser && name === 'Sign In' ? (
      <ListItem
        divider
        key={i}
        button
        onClick={() => {
          setDrawerOpen(false);
          setTabIndex(i);
          auth.signOut();
        }}
        selected={tabIndex === i}
        classes={{ selected: classes.drawerItemSelected }}
      >
        <ListItemText className={classes.drawerItemText} disableTypography>
          Sign Out
        </ListItemText>
      </ListItem>
    ) : (
      <ListItem
        divider
        key={i}
        button
        component={Link}
        to={link}
        onClick={() => {
          setDrawerOpen(false);
          setTabIndex(i);
        }}
        selected={tabIndex === i}
        classes={{ selected: classes.drawerItemSelected }}
      >
        <ListItemText className={classes.drawerItemText} disableTypography>
          {name}
        </ListItemText>
      </ListItem>
    )
  );

const Drawer = ({
  tabIndex,
  setTabIndex,
  drawerOpen,
  setDrawerOpen,
  currentUser
}) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <SwipeableDrawer
        anchor='right'
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerOpen}
        classes={{ paper: classes.drawer }}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <div className={classes.toolbar} />
        <List disablePadding>
          {renderList(
            setDrawerOpen,
            setTabIndex,
            tabIndex,
            classes,
            currentUser
          )}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
};

export default Drawer;
