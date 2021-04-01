import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  InputAdornment
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CollectionItemContainer from '../containers/CollectionItemContainer';

const useStyles = makeStyles(theme => ({
  accordionDetails: { margin: '0 1em', cursor: 'pointer', padding: 0 },
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
    width: '70%',
    margin: '0.5em 0'
  },
  input: {
    color: 'black'
  }
}));

const Shop = ({
  collections,
  filterByCollection,
  filterByPrice,
  filteredByCollection,
  filteredByPrice
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [filterPrice, setfilterPrice] = useState({
    from: '189',
    until: '1189'
  });

  useEffect(() => {
    filterByPrice(filterPrice);
  }, [filterPrice]);

  const { from, until } = filterPrice;

  const handleChange = e => {
    const { name, value } = e.target;
    setfilterPrice({ ...filterPrice, [name]: value });
  };

  return collections ? (
    <Grid
      container
      direction={matchesMD ? 'column' : 'row'}
      spacing={3}
      style={{
        width: matchesMD ? '100vw' : '85vw',
        margin: matchesMD ? 0 : '0 auto'
      }}
    >
      <Grid
        item
        container
        spacing={3}
        direction='row'
        style={{
          width: matchesSM ? '100%' : '20%',
          height: '100%'
        }}
      >
        <Grid item>
          <Typography variant='h2'>FILTER</Typography>
        </Grid>
        {filteredByCollection
          ? collections.map((collection, i) =>
              collection.routeName === filteredByCollection.routeName ? (
                <Grid
                  item
                  container
                  direction='row'
                  alignItems='center'
                  justify='space-between'
                  style={{
                    padding: '0.2em 0.8em',
                    backgroundColor: 'rgba(0,0,0,0.1)'
                  }}
                  key={i}
                >
                  <Grid item>
                    <Typography
                      variant='body2'
                      style={{ fontSize: 14, fontWeight: 'bold' }}
                    >
                      COLLECTION: {collection.title}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    onClick={() => filterByCollection('')}
                    style={{ cursor: 'pointer' }}
                  >
                    <div>&#10005;</div>
                  </Grid>
                </Grid>
              ) : null
            )
          : null}
        <Grid item>
          <Accordion elevation={0} className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h4' style={{ fontWeight: 700 }}>
                COLLECTIONS
              </Typography>
            </AccordionSummary>
            {collections.map((collection, i) => (
              <AccordionDetails
                key={i}
                className={classes.accordionDetails}
                onClick={() => filterByCollection(collection.routeName)}
              >
                <Typography variant='body2'>
                  {collection.title} ({collection.items.length})
                </Typography>
              </AccordionDetails>
            ))}
          </Accordion>
        </Grid>
        <Grid item container>
          <Accordion elevation={0} className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h4' style={{ fontWeight: 700 }}>
                PRICE
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Grid item container>
                <Grid item>
                  <TextField
                    className={classes.textField}
                    type='number'
                    name='from'
                    value={from}
                    onChange={handleChange}
                    label='From'
                    InputProps={{
                      className: classes.input,
                      startAdornment: (
                        <InputAdornment position='start'>$</InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.textField}
                    type='number'
                    name='until'
                    value={until}
                    onChange={handleChange}
                    label='Until'
                    InputProps={{
                      className: classes.input,
                      startAdornment: (
                        <InputAdornment position='start'>$</InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify='center'
        spacing={matchesSM ? 0 : 4}
        style={{ width: matchesMD ? '100%' : '80%', margin: 0, padding: 0 }}
      >
        {filteredByCollection
          ? filteredByCollection.items.map((item, i) => (
              <Grid item key={i} style={{ margin: matchesSM ? '1em 0' : 0 }}>
                <CollectionItemContainer
                  item={item}
                  collectionRouteName={filteredByCollection.routeName}
                />
              </Grid>
            ))
          : filteredByPrice.length
          ? filteredByPrice.map((item, i) => (
              <Grid item key={i} style={{ margin: matchesSM ? '1em 0' : 0 }}>
                <CollectionItemContainer
                  item={item}
                  collectionRouteName={item.collectionName
                    .toLowerCase()
                    .split(' ')
                    .join('-')}
                />
              </Grid>
            ))
          : collections.map((col, i) =>
              col.items.map((item, i) => (
                <Grid item key={i} style={{ margin: matchesSM ? '1em 0' : 0 }}>
                  <CollectionItemContainer
                    item={item}
                    collectionRouteName={col.routeName}
                  />
                </Grid>
              ))
            )}
      </Grid>
    </Grid>
  ) : null;
};

export default Shop;
