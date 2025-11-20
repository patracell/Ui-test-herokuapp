import test, { expect, Locator, Page } from '@playwright/test';

interface Elements {
  locator: (page: Page) => Locator;
  name: string;
  text?: string;
  attrubute?: {
    type: string;
    value: string;
  };
}

export class HerokMaim {
  readonly page: Page;
  readonly elements: Elements[];

  constructor(page: Page) {
    this.page = page;
    this.elements = [
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'A/B Testing' }),
        name: 'A/B Testing link',
        text: 'A/B Testing',
        attrubute: {
          type: 'href',
          value: '/abtest',
        },
      },
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'Add/Remove Elements' }),
        name: 'Add/Remove Elements link',
        text: 'Add/Remove Elements',
        attrubute: {
          type: 'href',
          value: '/add_remove_elements/',
        },
      },
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'Basic Auth' }),
        name: 'Basic Auth link',
        text: 'Basic Auth',
        attrubute: {
          type: 'href',
          value: '/basic_auth',
        },
      },
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'Broken Images' }),
        name: 'Broken Images link',
        text: 'Broken Images',
        attrubute: {
          type: 'href',
          value: '/broken_images',
        },
      },
    ];
  }
  async openHerokMaim() {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }
  async checkElemVisible() {
    for (const { locator, name } of this.elements) {
      await expect(locator(this.page)).toBeVisible();
    }
  }
  async checkLinkAttribute() {
    for (const { locator, name, attrubute } of this.elements)
      if (attrubute) {
        await expect(locator(this.page)).toHaveAttribute(attrubute.type, attrubute.value);
      }
  }
  async checkElemText() {
    for (const { locator, name, text } of this.elements)
      if (text) {
        await expect(locator(this.page)).toContainText(text);
      }
  }
}
