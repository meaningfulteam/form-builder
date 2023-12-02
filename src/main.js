import { attributes } from "./common/constants";
import { setFormConfig } from "./forms/setFormConfig";

/**
 * Initialize form settings for each form on the current landing page
 * @returns {undefined}
 */

export const initializeForms = () => {
    const {
        els: { key, val },
    } = attributes;

    const formElements = document.querySelectorAll(`[${key}="${val.form}"]`);

    formElements.forEach((form) => {
        setFormConfig(form);
    });
};
