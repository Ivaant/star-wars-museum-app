import { CLICK_MENU_BUTTON } from './constants';
import { CHANGE_SEARCHBOX_INPUT } from './constants';
import { MOUNT_ITEMS_TO_RENDER } from './constants';
import {
    REQUEST_MENU_PENDING,
    REQUEST_MENU_SUCCESS,
    REQUEST_MENU_FAILED
} from './constants';

export const setMenuButtonClick = buttonName => {
    console.log(buttonName);
    return {
        type: CLICK_MENU_BUTTON,
        payload: buttonName
    }
}

export const handleSearchBoxChange = input => {
    return {
        type: CHANGE_SEARCHBOX_INPUT,
        payload: input
    }
}

export const mountItemsToRender = assetName => {
    return {
        type: MOUNT_ITEMS_TO_RENDER,
        payload: assetName
    }
}

export const requestMenu = () => (dispatch) => {
    dispatch({ type: REQUEST_MENU_PENDING });
    fetch('https://swapi.co/api/')
            .then(response => response.json())
            .then(contents => dispatch({ type: REQUEST_MENU_SUCCESS, payload: contents }))
            .catch(error => dispatch({type: REQUEST_MENU_FAILED, payload: error}));
}

