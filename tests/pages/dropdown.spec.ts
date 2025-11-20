import test, { expect, Locator, Page } from '@playwright/test';
import { Dropdown } from '../models/Dropdown';

let dropPage: Dropdown;

test.describe('Drop Down Test', () => {
  test.beforeEach(async ({ page }) => {
    dropPage = new Dropdown(page);
    await dropPage.gotoDropDown();
  });
  test('Dropdown choice test', async () => {
    await dropPage.choiceOfOptions();
  });
  test('Dropdown option 1', async () => {
    await dropPage.choiceOption1();
  });
  test('Dropdown option 2', async () => {
    await dropPage.choiceOption2();
  });
});
