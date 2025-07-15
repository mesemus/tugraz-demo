import { test as invenio_test, updateLocators, registerPage } from '@inveniosoftware/invenio-e2e';
import { locators } from '../locators';
import { ExtendedHomePage } from '../pages/extendedHomePage';
import { merge } from 'ts-deepmerge';


export const test = invenio_test.extend({
    // Replace the locators within invenio-e2e with customized ones
    locators: updateLocators(locators),

    locators: async ({ locators: originalLocators }, use) => {
        const mergedLocators = merge(originalLocators, locators);
        await use(mergedLocators);
    }

    // Replace the homepage with the extended one that does better validation on
    // our page
    // homePage: async ({ page, locators, availablePages }, use) => {
    //     const homePage = new ExtendedHomePage(page, locators, availablePages);
    //     availablePages.homePage = homePage;
    //     await use(homePage);
    // },
    ...registerPage('homePage', ExtendedHomePage)
});
