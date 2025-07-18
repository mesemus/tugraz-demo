import { expect, test } from '../fixtures/services';

test.describe('TU Graz Services Pattern Test', () => {
  test('should load services without errors', async ({ services }) => {

    expect(services.i18n.languages).toEqual(['en', 'de']);
    expect(services.i18n.defaultLanguage).toBe('en');
    
    const homeTitle = services.i18n.t('page.title', 'en');
    expect(homeTitle).toBe('Home');
    
    const germanTitle = services.i18n.t('page.title', 'de');
    expect(germanTitle).toBe('Startseite');
    
    console.log('Services pattern working correctly!');
  });

  test('should create service-aware homepage without errors', async ({ serviceHomePage, page }) => {
    
    expect(serviceHomePage).toBeDefined();
    
    const localizedTitle = await serviceHomePage.getLocalizedTitle();
    expect(localizedTitle).toBe('Home');
    
    console.log('Service-aware HomePage working correctly!');
  });
}); 