import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Contacts from './pages/contacts';
import NotFound from './pages/not-found';
import Cart from './pages/cart';
import Catalog from './pages/catalog';
import ItemPage from './pages/item';
import UserPage from './pages/user';
import Register from './pages/register';
import LogIn from './pages/log-in';
import ImageSlider from './components/image-slider/image-slider';
import { SLIDES_IMAGES, FANCY_TITLES, FANCY_TEXTS } from './data/slides_images';
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
        <Route path="/log-in">
          <LogIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/catalog">
          <div style={{ height: '40vh', position: 'relative' }}>
            <ImageSlider
              images={SLIDES_IMAGES}
              textBigger={FANCY_TITLES}
              textSmaller={FANCY_TEXTS}
              showText={true}
            />
          </div>
          <Catalog />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route path="/item/:id">
          <ItemPage />
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
