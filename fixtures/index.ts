import { test as invenio_test, updateLocators, registerPage } from '@inveniosoftware/invenio-e2e';
import { locators } from '../locators';
import { ExtendedHomePage } from '../pages/extendedHomePage';

export const test = invenio_test.extend({
    // Replace the locators within invenio-e2e with customized ones
    locators: updateLocators(locators),

    // Replace the homepage with the extended one that does better validation on
    // our page
    
    ...registerPage('homePage', ExtendedHomePage)
});
