import {BASE_PAGE_LOCATORS, HOME_PAGE_LOCATORS} from '@inveniosoftware/invenio-e2e';

// in this file, extend or overwrite the default home page locators to suit your UI

// locators with content that is in all pages, such as the logo
export const basePageLocators = {
    ...BASE_PAGE_LOCATORS,
    logoLink: '#repo-logo a',
}

// locators for the home page
export const homePageLocators = {
    ...HOME_PAGE_LOCATORS,
    searchField: 'input.prompt[aria-label="Search records..."]',
    searchButton: 'button.search[aria-label="Search"]',
    footerContactLink: 'a#feedback-form',
}
