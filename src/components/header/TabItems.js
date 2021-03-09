import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { routes } from './routes';

import { Tabs, Tab } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

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

const TabItems = ({ tabIndex, setTabIndex }) => {
  const classes = useStyles();

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
          i !== 4 ? (
            <Tab
              disableRipple
              key={name}
              className={classes.tab}
              component={Link}
              to={link}
              label={name}
            />
          ) : (
            <Tab
              key={name}
              icon={<ShoppingCartOutlinedIcon />}
              className={classes.tab}
              onClick={e => console.log('cart icon clicked')}
            />
          )
        )}
      </Tabs>
    </>
  );
};

export default TabItems;
