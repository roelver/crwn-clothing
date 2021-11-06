import { TOGGLE_DROPDOWN } from "../../util/constants";

export const toggleDropdown = () => ({
    type: TOGGLE_DROPDOWN
});

export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: product
});

export const removeFromCart = (product) => ({
    type: "REMOVE_FROM_CART",
    payload: product
});