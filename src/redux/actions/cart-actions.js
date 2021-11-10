import { TOGGLE_DROPDOWN, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ITEM } from "../../util/constants";

export const toggleDropdown = () => ({
    type: TOGGLE_DROPDOWN
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product
});

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item
});