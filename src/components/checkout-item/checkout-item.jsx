import React from 'react';
import { connect } from 'react-redux';

import { removeFromCart, removeItem, addToCart } from '../../redux/actions/cart-actions';

import './checkout-item.scss';

const CheckoutItem = ({cartItem, clearItem, removeItem, addToCart }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt='item' />
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{cartItem.quantity}</span>
            <div className='arrow' onClick={() => addToCart(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{cartItem.price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>
            <span>&#10005;</span>
        </div>
    </div>
    );

const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(removeFromCart(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    addToCart: (item) => dispatch(addToCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);