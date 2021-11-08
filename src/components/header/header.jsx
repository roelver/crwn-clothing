import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/selectors/cart-selectors';
import { selectCurrentUser } from '../../redux/selectors/user-selectors';

const Header = ({currentUser, hideDropdown}) => (

    <div className='header'>
           <Link className='logo-container' to='/'>
               <Logo className='logo'/>
           </Link>
           <div className='options'>
               <Link className='option' to='/shop'>SHOP</Link>
               <Link className='option' to='/shop'>CONTACT</Link>
               {
                   currentUser ?
                   <div className='option' onClick={() => auth.signOut()}>LOG OUT</div> :
                   <Link className='option' to='/login'>LOG IN</Link>
                }
                <CartIcon/>
           </div>
           {
            hideDropdown ? '' : <CartDropdown />
           }
       </div>
);

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hideDropdown: selectCartHidden
})

export default connect(mapStateToProps)(Header);