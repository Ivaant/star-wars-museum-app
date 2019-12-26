import { CLICK_MENU_BUTTON } from './constants';
import { CHANGE_SEARCHBOX_INPUT } from './constants';
import { MOUNT_ITEMS_TO_RENDER } from './constants';

import {
    REQUEST_MENU_PENDING,
    REQUEST_MENU_SUCCESS,
    REQUEST_MENU_FAILED
} from './constants';

import assets from '../assets/assets';

const initialState = {
    menuButtonClickedName: "people",
    searchBoxInput: '',
    itemsToRender: assets.people
}

export const appStateSwitcher = (state = initialState, action = {}) => {
    switch (action.type) {
        case CLICK_MENU_BUTTON:
            return {
                ...state,
                menuButtonClickedName: action.payload
            }
        case CHANGE_SEARCHBOX_INPUT:
            return {
                ...state,
                searchBoxInput: action.payload
            }
        case MOUNT_ITEMS_TO_RENDER:
            return {
                ...state,
                itemsToRender: assets[action.payload]
            }
        default:
            return state;
    }
}

const initialMenuState = {
    isPending: true,
    menu: {},
    error: ''
}

export const requestMenu = (state = initialMenuState, action = {}) => {
    switch (action.type) {
        case REQUEST_MENU_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_MENU_SUCCESS:
            return {
                ...state,
                isPending: false,
                menu: action.payload
            }
        case REQUEST_MENU_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state
    }
}