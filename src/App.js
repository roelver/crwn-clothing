import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage';
import TempPage from './pages/tmp-page/temp-page';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop/hats' component={TempPage} />
        <Route path='/shop/jackets' component={TempPage} />
        <Route path='/shop/sneakers' component={TempPage} />
        <Route path='/shop/womens' component={TempPage} />
        <Route path='/shop/mens' component={TempPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
