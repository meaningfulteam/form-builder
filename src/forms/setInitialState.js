import { attributes } from "../common/constants";

// Destructure attributes constant
const {
    els: { key, val },
} = attributes;

/**
 * Set the initial state of the form element
 * @param {HTMLFormElement} form - The form element to be setted
 * @returns {undefined}
 */
export const setInitialState = (form) => {
    // Reset screen config.
    const formScreens = $(form).find(`[${key}="${val.screen}"]`);
    formScreens.slice(1).hide();

    // Reset buttons config.
    const $lButton = $(form).find(`[${key}="${val.buttons.left}"]`);
    $lButton.hide();
};
