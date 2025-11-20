import test, { expect, Locator, Page } from '@playwright/test';

export class Dropdown {
  readonly page: Page;
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.locator('#dropdown');
  }
  async gotoDropDown() {
    this.page.goto('https://the-internet.herokuapp.com/dropdown');
  }
  async choiceOfOptions() {
    await expect(this.dropdown).toHaveValue('');
    await expect(this.dropdown).toContainText('Please select an option');
  }
  async choiceOption1() {
    await this.dropdown.selectOption('1');
    await expect(this.dropdown).toHaveValue('1');
    await expect(this.dropdown).toContainText('Option 1');
  }
  async choiceOption2() {
    await this.dropdown.selectOption('2');
    await expect(this.dropdown).toHaveValue('2');
    await expect(this.dropdown).toContainText('Option 2');
  }
}
