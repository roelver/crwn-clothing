import { TOGGLE_DROPDOWN } from '../../util/constants';

const INITIAL_STATE = {
    hideDropdown: true
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_DROPDOWN: 
            return {
                ...state,
                hideDropdown: !state.hideDropdown
            } 
        default: 
            return state;
    }
}

export default cartReducer;
