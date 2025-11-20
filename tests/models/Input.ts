import test, { expect, Locator, Page } from '@playwright/test';

export class InputPage {
  readonly page: Page;
  readonly input: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = this.page.getByRole('spinbutton');
  }
  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/inputs');
  }
  async fillInput(value: string) {
    await this.input.fill(value);
  }
  async pressArrowUp() {
    await this.input.press('ArrowUp');
  }
  async pressArrowDown() {
    await this.input.press('ArrowDown');
  }
  async inputValue(): Promise<string> {
    return await this.input.inputValue();
  }
}
