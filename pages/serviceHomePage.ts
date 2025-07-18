/**
 * Copyright (C) 2024 Graz University of Technology.
 * 
 * invenio-e2e is free software; you can redistribute it and/or
 * modify it under the terms of the ISC License; see LICENSE file for more
 * details.
 */

import { HomePage, type Services } from '@inveniosoftware/invenio-e2e';

import { Page } from '@playwright/test';

export class ServiceHomePage extends HomePage {
  constructor({ page, locators, availablePages, services }: {
    page: Page,
    locators: any,
    availablePages: { [key: string]: object },
    services: Services
  }) {
    super({ page, locators, availablePages });
    this.services = services;
  }

  protected services: Services;

  async switchLanguage(language: string) {
    if (this.services?.i18n && this.services.i18n.languages.includes(language)) {
      await this.services.i18n.switchLanguage(this.page, language);
      await this.page.waitForLoadState('networkidle');
    } else {
      console.warn(`Language '${language}' not supported by ${this.services.repository.name}`);
    }
  }

  async getLocalizedTitle(): Promise<string> {
    const title = await this.page.title();
    if (this.services?.i18n) {
      return this.services.i18n.t('page.title');
    }
    return title;
  }

  getRepositoryInfo() {
    return {
      name: this.services.repository.name,
      url: this.services.repository.url,
      supportedLanguages: this.services.i18n.languages,
      currentLanguage: this.services.i18n.defaultLanguage
    };
  }

  async goToRepository() {
    await this.services.repository.goto(this.page);
    await this.validatePageLoaded();
  }

  async navigateToSearch() {
    return await this.submitSearch();
  }
} 