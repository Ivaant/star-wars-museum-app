import { CLICK_MENU_BUTTON } from './constants';
import { CHANGE_SEARCHBOX_INPUT } from './constants';
import { MOUNT_ITEMS_TO_RENDER } from './constants';
import { SET_SELECTED_ITEM } from './constants';

import {
    REQUEST_MENU_PENDING,
    REQUEST_MENU_SUCCESS,
    REQUEST_MENU_FAILED
} from './constants';

import {
    REQUEST_ITEMS_PENDING,
    REQUEST_ITEMS_SUCCESS,
    REQUEST_ITEMS_FAILED
} from './constants';

import {
    REQUEST_HOMEWORLD_PENDING,
    REQUEST_HOMEWORLD_SUCCESS,
    REQUEST_HOMEWORLD_FAILED
} from './constants';

import {
    REQUEST_FILMS_NAMES_PENDING,
    REQUEST_FILMS_NAMES_SUCCESS,
    REQUEST_FILMS_NAMES_FAILED
} from './constants';

import assets from '../assets/assets';

const initialState = {
    menuButtonClickedName: "people",
    searchBoxInput: '',
    itemsToRender: assets.people,
    selectedItem: null
}

export const appStateSwitcher = (state = initialState, action = {}) => {
    switch (action.type) {
        case CLICK_MENU_BUTTON:
            return {
                ...state,
                menuButtonClickedName: action.payload,
                selectedItem: null
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
        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.payload
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

const initialItemsState = {
    isPending: true,
    itemsList: [],
    error: ''
}

export const requestItemsList = (state = initialItemsState, action = {}) => {
    switch (action.type) {
        case REQUEST_ITEMS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_ITEMS_SUCCESS:
            return {
                ...state,
                isPending: false,
                itemsList: action.payload
            }
        case REQUEST_ITEMS_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state
    }
}

const initialHeroPageState = {
    hwDataIsPending: true,
    homeworld: assets.placeholder[0],
    filmsDataIsPending: true,
    filmsNames: [],
    hwError: '',
    filmsNamesError: ''
}

export const setHeroPageState = (state = initialHeroPageState, action = {}) => {
    switch (action.type) {
        case REQUEST_HOMEWORLD_PENDING:
            return {
                ...state,
                hwDataIsPending: true,
                homeworld: assets.placeholder[0],
                hwError: ''
            }
        case REQUEST_HOMEWORLD_SUCCESS:
            return {
                ...state,
                isPending: false,
                homeworld: action.payload
            }
        case REQUEST_HOMEWORLD_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case REQUEST_FILMS_NAMES_PENDING:
            return {
                ...state,
                filmsDataIsPending: true
            }
        case REQUEST_FILMS_NAMES_SUCCESS:
            return {
                ...state,
                filmsDataIsPending: false,
                filmsNames: action.payload
            }
        case REQUEST_FILMS_NAMES_FAILED:
            return {
                ...state,
                filmsDataIsPending: false,
                filmsNamesError: action.payload
            }
        default:
            return state
    }
}