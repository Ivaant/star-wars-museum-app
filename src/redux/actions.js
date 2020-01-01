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

import assets from '../assets/assets';

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

export const setSelectedItem = item => {
    return {
        type: SET_SELECTED_ITEM,
        payload: item
    }
}

export const requestMenu = () => (dispatch) => {
    dispatch({ type: REQUEST_MENU_PENDING });
    fetch('https://swapi.co/api/')
        .then(response => response.json())
        .then(contents => dispatch({ type: REQUEST_MENU_SUCCESS, payload: contents }))
        .catch(error => dispatch({ type: REQUEST_MENU_FAILED, payload: error }));
}

export const requestItemsList = (listUrl) => (dispatch) => {
    dispatch({ type: REQUEST_ITEMS_PENDING });
    fetch(listUrl)
        .then(response => response.json())
        .then(itemsList => dispatch({ type: REQUEST_ITEMS_SUCCESS, payload: itemsList.results }))
        .catch(error => dispatch({ type: REQUEST_ITEMS_FAILED, payload: error }));
}

export const requestHomeworld = (homeworldUrl) => dispatch => {
    dispatch({ type: REQUEST_HOMEWORLD_PENDING });
    fetch(homeworldUrl)
        .then(response => response.json())
        .then(planet => {
            const planetName = planet.name;
            let planetUrl = assets.planets.filter(planet => planet.name === planetName)[0];
            if (planetUrl === undefined) {
                planetUrl = assets.placeholder[0].url;
            }
            const homeworld = { name: planetName, url: planetUrl };
            dispatch({ type: REQUEST_HOMEWORLD_SUCCESS, payload: homeworld })
        })
        .catch(error => dispatch({ type: REQUEST_HOMEWORLD_FAILED, payload: error }));
}

