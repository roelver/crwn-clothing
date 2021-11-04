import { SET_USER_ACTION } from "../../util/constants";

export const setCurrentUser = (user) => ({
    type: SET_USER_ACTION,
    payload: user
});
