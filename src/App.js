import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop/hats' component={ShopPage} />
        <Route path='/shop/jackets' component={ShopPage} />
        <Route path='/shop/sneakers' component={ShopPage} />
        <Route path='/shop/womens' component={ShopPage} />
        <Route path='/shop/mens' component={ShopPage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
