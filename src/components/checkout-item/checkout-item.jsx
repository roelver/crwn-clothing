import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({cartItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt='item' />
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>{cartItem.quantity}</span>
        <span className='price'>{cartItem.price}</span>
        <div className='remove-button'>
            <span>&#10005;</span>
        </div>
    </div>
    );

export default CheckoutItem;