import { test, expect, Locator, Page } from '@playwright/test';
import { HerokMaim } from '../models/HerokMain';

let herokMain: HerokMaim;

test.describe('home main page check', () => {
  test.beforeEach(async ({ page }) => {
    herokMain = new HerokMaim(page);
    await herokMain.openHerokMaim();
  });
  test('visible elements', async () => {
    await herokMain.checkElemVisible();
  });
  test('presence of text', async () => {
    await herokMain.checkElemText();
  });
  test('href attribut', async () => {
    await herokMain.checkLinkAttribute();
  });
});
