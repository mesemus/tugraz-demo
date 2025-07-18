import { test as invenio_test, registerPage, updateLocators } from '@inveniosoftware/invenio-e2e';

import { ExtendedHomePage } from '../pages/extendedHomePage';
import { locators } from '../locators';

export const test = invenio_test.extend({
    locators: updateLocators(locators),    
    ...registerPage('homePage', ExtendedHomePage)
});
