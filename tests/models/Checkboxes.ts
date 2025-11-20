import test, { expect, Locator, Page } from '@playwright/test';

export class Checkboxes {
  readonly page: Page;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox1 = page.getByRole('checkbox').nth(0);
    this.checkbox2 = page.getByRole('checkbox').nth(1);
  }
  async goto() {
    this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }
  async checkBox1() {
    await expect(this.checkbox1).not.toBeChecked();
    await this.checkbox1.check();
    await expect(this.checkbox1).toBeChecked();
  }
  async checkBox2() {
    await expect(this.checkbox2).toBeChecked();
    await this.checkbox2.uncheck();
    await expect(this.checkbox2).not.toBeChecked();
  }
}
