import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
// import { addCollectionAndDocuments } from '../firebase/firebase.utils';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

import HeaderContainer from '../containers/HeaderContainer';
import HomeContainer from '../containers/HomeContainer';
import Spinner from './spinner/Spinner';
import ErrorBoundary from './error-boundary/ErrorBoundary';

const ShopContainer = lazy(() => import('../containers/ShopContainer'));
const CollectionsContainer = lazy(() =>
  import('../containers/CollectionsContainer')
);
const CollectionContainer = lazy(() =>
  import('../containers/CollectionContainer')
);
const WatchContainer = lazy(() => import('../containers/WatchContainer'));
const SigninContainer = lazy(() => import('../containers/SigninContainer'));
const SignupContainer = lazy(() => import('../containers/SignupContainer'));
const CartContianer = lazy(() => import('../containers/CartContainer'));

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
    // const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeaderContainer />
          <Switch>
            <Route path='/' exact component={HomeContainer} />
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route path='/shop' exact component={ShopContainer} />
                <Route
                  path='/collections'
                  exact
                  component={CollectionsContainer}
                />
                <Route
                  path='/collections/:collection_id'
                  exact
                  component={CollectionContainer}
                />
                <Route
                  path='/collections/:collection_id/:watch_id'
                  exact
                  component={WatchContainer}
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
                <Route path='/cart' exact component={CartContianer} />
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
