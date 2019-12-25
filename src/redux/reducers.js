import { CLICK_MENU_BUTTON } from './constants';

const initialState = {
    menuButtonClicked: "people"
}

export const mainMenuSwitcher = (state = initialState, action = {}) => {
    switch (action.type) {
        case CLICK_MENU_BUTTON:
            return {
                ...state,
                menuButtonClicked: action.payload
            }
        default:
            return state;
    }
}