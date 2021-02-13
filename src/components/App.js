import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
// import { addCollectionAndDocuments } from '../firebase/firebase.utils';

import HeaderContainer from '../containers/HeaderContainer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CollectionsContainer from '../containers/CollectionsContainer';
import CollectionContainer from '../containers/CollectionContainer';
import WatchViewContainer from '../containers/WatchViewContainer';
import About from './pages/About';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';

class App extends Component {
  componentDidMount() {
    // addCollectionAndDocuments('collections', this.props.collections);
    this.props.fetchCollections();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeaderContainer />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/shop' exact component={Shop} />
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
            <Route path='/about' exact component={About} />
            <Route path='/auth' exact component={Auth} />
            <Route path='/checkout' exact component={Checkout} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
