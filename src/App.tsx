import React, { FC } from 'react';
import './App.module.scss';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Contacts from './pages/contacts';
import NotFound from './pages/not-found';
import Cart from './pages/cart';
import Catalog from './pages/catalog';
import { Header } from './components/header/header';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Redirect to="/404-page" />
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
