import test, { expect, Locator, Page } from '@playwright/test';

export class AddRemoveElements {
  readonly page: Page;
  readonly addButton: Locator;
  readonly removeButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.getByRole('button', { name: 'Add Element' });
    this.removeButtons = page.getByRole('button', { name: 'Delete' });
  }
  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  }
  async addElem(click: number = 1) {
    await expect(this.addButton).toBeVisible();
    for (let i = 1; i < click; i++) {
      await this.addButton.click({ timeout: 1000 });
    }
    await this.addButton.click({ timeout: 1000 });
  }
  async removeElem(index: number = 1) {
    const removeButtons = this.removeButtons.nth(index);
    await expect(removeButtons).toBeVisible();
    await removeButtons.click({ timeout: 1000 });
  }
  async getCountOfElements() {
    return await this.removeButtons.count();
  }
}
