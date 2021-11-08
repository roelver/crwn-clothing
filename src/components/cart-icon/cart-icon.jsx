import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/actions/cart-actions';
import { selectCartItemsCount } from '../../redux/selectors/cart-selectors';

import './cart-icon.scss';

const CartIcon = ({toggleDropdown, itemCount}) => (
    <div className='cart-icon' onClick={()=>toggleDropdown()}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div> 
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
    toggleDropdown: () => dispatch(toggleDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);