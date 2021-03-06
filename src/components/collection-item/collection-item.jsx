import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/actions/cart-actions';
import CustomButton from '../custom-button/custom-button';
import './collection-item.scss';

const CollectionItem = ({ item, addToCart}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='item-name'>{name}</span>
                <span className='item-price'>&euro;{price}</span>
            </div>
            <CustomButton onClick={() => addToCart(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addToCart(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);