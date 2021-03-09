import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
// import { addCollectionAndDocuments } from '../firebase/firebase.utils';

import HeaderContainer from '../containers/HeaderContainer';
import HomeContainer from '../containers/HomeContainer';
import ShopContainer from '../containers/ShopContainer';
import CollectionsContainer from '../containers/CollectionsContainer';
import CollectionContainer from '../containers/CollectionContainer';
import WatchViewContainer from '../containers/WatchViewContainer';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Cart from './Cart';

class App extends Component {
  componentDidMount() {
    // addCollectionAndDocuments('collections', this.props.collections);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeaderContainer />
          <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/shop' exact component={ShopContainer} />
            <Route path='/collections' exact component={CollectionsContainer} />
            <Route
              path='/collections/:collection_id'
              exact
              component={CollectionContainer}
            />
            <Route
              path='/collections/:collection_id/:watch_id'
              exact
              component={WatchViewContainer}
            />
            <Route path='/account/sign-in' exact component={Signin} />
            <Route path='/account/sign-up' exact component={Signup} />
            <Route path='/cart' exact component={Cart} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
