import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import  { toggleDropdown } from '../../redux/actions/cart-actions';


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

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hideDropdown: state.cart.hideDropdown
})

export default connect(mapStateToProps)(Header);