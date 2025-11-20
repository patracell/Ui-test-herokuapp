import test, { expect, Locator, Page } from '@playwright/test';
import { Dropdown } from '../models/Dropdown';

let dropPage: Dropdown;

test.describe('Drop Down Test', () => {
  test.beforeEach(async ({ page }) => {
    dropPage = new Dropdown(page);
    await dropPage.gotoDropDown();
  });
  test('Выбираем Dropdown', async () => {
    await dropPage.choiceOfOptions();
  });
  test('Выбираем первый Dpordown и проверяем', async () => {
    await dropPage.choiceOption1();
  });
  test('Выбираем второй Dpordown и проверяем', async () => {
    await dropPage.choiceOption2();
  });
});
