import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

import HeaderContainer from '../containers/HeaderContainer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <HeaderContainer />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/about' exact component={About} />
        <Route path='/auth' exact component={Auth} />
        <Route path='/checkout' exact component={Checkout} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
