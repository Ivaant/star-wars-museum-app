import { CLICK_MENU_BUTTON } from './constants';
import { CHANGE_SEARCHBOX_INPUT } from './constants';
import { MOUNT_ITEMS_TO_RENDER } from './constants';

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

