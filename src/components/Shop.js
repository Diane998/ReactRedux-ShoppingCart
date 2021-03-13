import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  TextField,
  InputAdornment
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CollectionItemPreview from './collection/CollectionItemPreview';

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
    width: '70%',
    margin: '0.5em 0'
  },
  input: {
    color: 'black'
  }
}));

const Shop = ({ collections }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return collections ? (
    <Grid
      container
      direction={matchesMD ? 'column' : 'row'}
      justify='center'
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
              <AccordionDetails key={i} className={classes.accordionDetails}>
                <Typography variant='body2' style={{ lineHeight: '10px' }}>
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
              <FormControl className={classes.margin}>
                <TextField
                  className={classes.textField}
                  label='From'
                  InputProps={{
                    className: classes.input,
                    startAdornment: (
                      <InputAdornment position='start'>€</InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classes.textField}
                  label='Until'
                  InputProps={{
                    className: classes.input,
                    startAdornment: (
                      <InputAdornment position='start'>€</InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Grid
        item
        container
        spacing={3}
        justify='center'
        style={{
          width: matchesMD ? '100%' : '80%',
          height: '100%'
        }}
      >
        {collections.map((col, i) =>
          col.items.map(({ id, ...otherProps }) => (
            <Grid item key={id} style={{ margin: '0.5em 0' }}>
              <CollectionItemPreview id={id} {...otherProps} />
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  ) : null;
};

export default Shop;
