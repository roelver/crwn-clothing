import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase';

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import LoginPage from './pages/login/login';
import Header from './components/header/header';
import  { setCurrentUser } from './redux/actions/user-actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
