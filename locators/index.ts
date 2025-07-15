import { Locators as BaseLocators } from '@inveniosoftware/invenio-e2e';

// in this file, extend or overwrite the default locators to suit your UI

export const locators = {
    header: {
        logoLink: "#repo-logo a",
    },
    homePage: {
        searchField: 'input.prompt[aria-label="Search records..."]',
        searchButton: 'button.search[aria-label="Search"]',
        contactLink: 'a#feedback-form',
    }
}
export type Locators = BaseLocators & typeof locators;