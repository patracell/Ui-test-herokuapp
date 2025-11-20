import test, { expect, Locator, Page } from '@playwright/test';
import { Checkboxes } from '../models/Checkboxes';

let checkBoxPage: Checkboxes;

test.describe('add and remove Elements', () => {
  test.beforeEach(async ({ page }) => {
    checkBoxPage = new Checkboxes(page);
    await checkBoxPage.goto();
  });
  test('Проверка первого чекбоса', async () => {
    await checkBoxPage.checkBox1();
  });
  test('проверка второго чекбокса', async () => {
    await checkBoxPage.checkBox2();
  });
});
