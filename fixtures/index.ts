import { test as invenio_test, updateLocators, registerPage } from '@inveniosoftware/invenio-e2e';
import { locators } from '../locators';
import { ExtendedHomePage } from '../pages/extendedHomePage';

export const test = invenio_test.extend<{
    translations: Record<string, string>;
}>({
    // Replace the locators within invenio-e2e with customized ones
    locators: updateLocators(locators),

    // A sample new fixture providing expected translations for the home page
    translations: { 'Contact us': 'Kontaktieren Sie uns' },

    // Replace the homepage with the extended one that does better validation on
    // our page
    ...registerPage('homePage', ExtendedHomePage, {
        extraFixtures: ["translations"]
    })
});
