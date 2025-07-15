import { HomePage } from '@inveniosoftware/invenio-e2e';
import type { Locators } from '../locators';

/**
 * Class representing extended home page with special footer.
 */

export class ExtendedHomePage extends HomePage<Locators> {

    // VALIDATION
    /**
     * Validates that the  User Profile page has loaded by checking for a specific locator.
     */
    async validatePageLoaded(): Promise<void> {
        await super.validatePageLoaded();
        // extra check added here. Typing should be fixed.
        await this.page.waitForSelector(this.locators.homePage.contactLink);
    }
}