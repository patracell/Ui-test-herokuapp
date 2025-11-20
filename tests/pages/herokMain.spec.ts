import { test, expect, Locator, Page } from '@playwright/test';
import { HerokMaim } from '../models/HerokMain';

let herokMain: HerokMaim;

test.describe('home main page check', () => {
  test.beforeEach(async ({ page }) => {
    herokMain = new HerokMaim(page);
    await herokMain.openHerokMaim();
  });
  test('Проверяем видимость элементов', async () => {
    await herokMain.checkElemVisible();
  });
  test('Проверяем текст элементов', async () => {
    await herokMain.checkElemText();
  });
  test('Наличие href attribut', async () => {
    await herokMain.checkLinkAttribute();
  });
});
