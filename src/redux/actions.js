import { CLICK_MENU_BUTTON } from './constants';

export const setMenuButtonClick = buttonName => {
    console.log(buttonName);
    return {
        type: CLICK_MENU_BUTTON,
        payload: buttonName
    }
}

