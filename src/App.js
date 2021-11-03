import React from 'react';
import { Route, Switch } from 'react-router';

import { auth, createUserProfileDocument } from './firebase/firebase';

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import LoginPage from './pages/login/login';
import Header from './components/header/header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/shop/hats' component={ShopPage} />
          <Route path='/shop/jackets' component={ShopPage} />
          <Route path='/shop/sneakers' component={ShopPage} />
          <Route path='/shop/womens' component={ShopPage} />
          <Route path='/shop/mens' component={ShopPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/' component={HomePage} />        <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
