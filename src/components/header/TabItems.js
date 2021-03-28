import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { makeStyles } from '@material-ui/styles';
import { routes } from './routes';

import { Tabs, Tab, Popper, Grow } from '@material-ui/core';
import CartIconContainer from '../../containers/CartIconContainer';
import CartDropdownContainer from '../../containers/CartDropdownContainer';

const useStyles = makeStyles(theme => ({
  tabContainer: { marginLeft: 'auto', marginRight: '2em' },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  cartIcon: {
    width: '45px',
    height: '45px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginRight: '2em'
  },
  shoppingcon: {
    width: '24px',
    height: '24px'
  },
  itemCount: {
    position: 'absolute',
    fontSize: '10px',
    fontWeight: 'bold',
    bottom: '12px'
  },
  estimateTab: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary
  }
}));

const TabItems = ({ tabIndex, setTabIndex, currentUser, hidden }) => {
  const classes = useStyles();
  const anchorRef = useRef(null);

  const handleChange = (e, i) => {
    setTabIndex(i);
  };

  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='primary'
      >
        {routes.map(({ name, link }, i) =>
          name === 'Cart' ? (
            <Tab
              key={i}
              ref={anchorRef}
              disableRipple
              icon={<CartIconContainer />}
              className={classes.tab}
            />
          ) : currentUser && name === 'Sign In' ? (
            <Tab
              key={i}
              disableRipple
              className={classes.tab}
              label={'Sign Out'}
              onClick={() => auth.signOut()}
            />
          ) : (
            <Tab
              disableRipple
              key={i}
              className={classes.tab}
              component={Link}
              to={link}
              label={name}
            />
          )
        )}
      </Tabs>
      <Popper
        style={{ marginRight: '2em' }}
        open={!hidden}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        <Grow>
          <CartDropdownContainer />
        </Grow>
      </Popper>
    </>
  );
};

export default TabItems;
