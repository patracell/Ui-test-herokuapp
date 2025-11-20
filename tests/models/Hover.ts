import test, { expect, Locator, Page } from '@playwright/test';

export class HoverPage {
  readonly page: Page;
  readonly figures: Locator;

  constructor(page: Page) {
    this.page = page;
    this.figures = page.locator('div.figure');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/hovers');
  }

  async getFiguresCount(): Promise<number> {
    return await this.figures.count();
  }

  getFigure(index: number): Locator {
    return this.figures.nth(index);
  }

  async hoverOnFigure(index: number): Promise<void> {
    const figure = this.getFigure(index);
    await figure.hover();
  }

  async verifyCaptionHidden(index: number): Promise<void> {
    const caption = this.getFigure(index).locator('div.figcaption');
    await expect(caption).toBeHidden();
  }

  async verifyCaptionVisible(index: number): Promise<void> {
    const caption = this.getFigure(index).locator('div.figcaption');
    await expect(caption).toBeVisible();
  }
}
