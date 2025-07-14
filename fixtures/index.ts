import {test as invenio_test} from '@inveniosoftware/invenio-e2e';
import {basePageLocators, homePageLocators} from '../locators';
import { ExtendedHomePage } from '../pages/extendedHomePage';

export const test = invenio_test.extend({
    // Replace the locators within invenio-e2e with customized ones
    homePageLocators: homePageLocators,
    basePageLocators: basePageLocators,

    // Replace the homepage with the extended one that does better validation on
    // our page
    homePage: async ({ page, basePageLocators, homePageLocators, availablePages }, use) => {
        const homePage = new ExtendedHomePage(page, basePageLocators, homePageLocators, availablePages);
        availablePages.homePage = homePage;
        await use(homePage);
    },
});