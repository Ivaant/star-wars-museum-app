import { CLICK_MENU_BUTTON } from './constants';
import { CHANGE_SEARCHBOX_INPUT } from './constants';

const initialState = {
    menuButtonClicked: "people",
    searchBoxInput: ''
}

export const appStateSwitcher = (state = initialState, action = {}) => {
    switch (action.type) {
        case CLICK_MENU_BUTTON:
            return {
                ...state,
                menuButtonClicked: action.payload
            }
        case CHANGE_SEARCHBOX_INPUT:
            return {
                ...state,
                searchBoxInput: action.payload
            }
        default:
            return state;
    }
}
