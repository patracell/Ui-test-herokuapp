import test, { expect, Locator, Page } from '@playwright/test';
import { HoverPage } from '../models/Hover';

let hoverPage: HoverPage;

test.describe('hover check', () => {
  test.beforeEach(async ({ page }) => {
    hoverPage = new HoverPage(page);
    await hoverPage.goto();
  });
  test('проверяем что скрыт, наводим, проверяем что виден', async () => {
    const count = await hoverPage.getFiguresCount();
    for (let i = 0; i < count; i++) {
      await hoverPage.verifyCaptionHidden(i);

      await hoverPage.hoverOnFigure(i);

      await hoverPage.verifyCaptionVisible(i);
    }
  });
});
