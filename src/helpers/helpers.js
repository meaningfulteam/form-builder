import { attributes } from "../common/constants";

// Destructure attributes constant
const {
    els: { key, val },
} = attributes;

/**
 * Retrieves the configuration from an HTML element
 *
 * @param {HTMLFormElement} el - HTML element with tagname = "FORM"
 * @returns {Object} - JSON object with the following structure:
 *   {
 *       "progressBar": Boolean,
 *       "screenCounter": Boolean
 *   }
 */
export const getConfig = (el) => {
    return JSON.parse(atob(el.getAttribute(attributes.config)));
};

/**
 * This function help to get the form length (screen amount)
 * @param {HTMLFormElement} form - The form element to set the progress bar to
 * @returns {number} - Return the number of screens
 */
export const getFormLength = (form) => {
    if (!(form instanceof HTMLFormElement)) {
        throw new Error("Invalid form element");
    }

    return form.querySelectorAll(`[${key}="${val.screen}"]`).length;
};

/**
 * Hide a screen and show another.
 * @param {HTMLFormElement} form - The form element containing the screens
 * @param {string} direction - The direction of the screen change: "prev" or "next"
 * @param {Function} callback - Function to be executed between screen changes
 * @returns {undefined}
 */
export const changeScreen = (form, direction, callback) => {
    const screens = $(form).find(`[${key}="${val.screen}"]`);
    const currentScreen = screens.filter(":visible");
    let screenToShow;

    if (direction === "prev") {
        screenToShow = currentScreen.prev(`[${key}="${val.screen}"]`);
    } else if (direction === "next") {
        screenToShow = currentScreen.next(`[${key}="${val.screen}"]`);
    } else {
        throw new Error(
            "Invalid direction. Only 'prev' and 'next' are allowed."
        );
    }

    if (screenToShow.length === 0) {
        throw new Error("No screen found in the specified direction.");
    }

    $(currentScreen).hide();
    if (typeof callback === "function") callback();
    $(screenToShow).show();
};
