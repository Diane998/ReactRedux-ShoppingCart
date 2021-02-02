import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

import HeaderContainer from '../containers/HeaderContainer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import CollectionContainer from '../containers/CollectionContainer';
import About from './pages/About';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';

class App extends Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeaderContainer />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route
              path='/shop'
              exact
              render={() => <Shop collections={this.props.collections} />}
            />
            <Route
              path='/collections'
              exact
              render={() => (
                <Collections collections={this.props.collections} />
              )}
            />
            <Route
              path='/collections/:collection_id'
              component={CollectionContainer}
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
