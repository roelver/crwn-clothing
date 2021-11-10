import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_DROPDOWN, REMOVE_ITEM } from '../../util/constants';

import { addItemToCart, removeItemFromCart } from '../../util/helpers';

const INITIAL_STATE = {
    hideDropdown: true,
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_DROPDOWN: 
            return {
                ...state,
                hideDropdown: !state.hideDropdown
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        default: 
            return state;
    }
}

export default cartReducer;
