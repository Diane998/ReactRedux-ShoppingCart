import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
// import { addCollectionAndDocuments } from '../firebase/firebase.utils';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

import HeaderContainer from '../containers/HeaderContainer';
import HomeContainer from '../containers/HomeContainer';
import ShopContainer from '../containers/ShopContainer';
import CollectionsContainer from '../containers/CollectionsContainer';
import CollectionContainer from '../containers/CollectionContainer';
import WatchViewContainer from '../containers/WatchViewContainer';
import SigninContainer from '../containers/SigninContainer';
import SignupContainer from '../containers/SignupContainer';
import Cart from './Cart';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // addCollectionAndDocuments('collections', this.props.collections);
    const { fetchCollections, setCurrentUser } = this.props;

    fetchCollections();
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

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
            <Route
              path='/account/sign-in'
              exact
              render={() =>
                currentUser ? <Redirect to='/' /> : <SigninContainer />
              }
            />
            <Route
              path='/account/sign-up'
              exact
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignupContainer />
              }
            />
            <Route path='/cart' exact component={Cart} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
