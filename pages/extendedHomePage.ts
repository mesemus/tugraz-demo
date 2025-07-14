import { expect, Page } from '@playwright/test';
import {HomePage} from '@inveniosoftware/invenio-e2e';

/**
 * Class representing extended home page with special footer.
 */

export class ExtendedHomePage extends HomePage {
    /**
     * Creates a new instance of the ExtendedHomePage.
     * 
     * @param page  Playwright Page object representing the current page.
     * @param locators  An object containing locators for elements on the page.
     * @param availablePages  An object containing available pages for navigation.
     */
    constructor(
        page: Page, 
        basePageLocators: {[key: string]: string} = {},
        homePageLocators: {[key: string]: string} = {},
        availablePages: {[key: string]: object}
    ) {
        super(page, basePageLocators as any, homePageLocators as any, availablePages);
    }
    
    // VALIDATION
    /**
     * Validates that the  User Profile page has loaded by checking for a specific locator.
     */
    async validatePageLoaded(): Promise<void> {
        await super.validatePageLoaded();
        await this.page.waitForSelector((this.homePageLocators as any).footerContactLink);
    }
}