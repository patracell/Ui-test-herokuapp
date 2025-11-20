import test, { expect, Locator, Page } from '@playwright/test';
import { InputPage } from '../models/Input';

let inputPage: InputPage;

test.describe('Проверка Input', () => {
  test.beforeEach(async ({ page }) => {
    inputPage = new InputPage(page);
    await inputPage.goto();
  });
  test('ввод числового значения', async () => {
    const testValue = '22';
    await inputPage.fillInput(testValue);
    const value = await inputPage.inputValue();
    expect(value).toBe(testValue);
  });
  test('смена числового значения при нажатии кнопки вверх', async () => {
    await inputPage.fillInput('31');
    await inputPage.pressArrowUp();
    const value = await inputPage.inputValue();
    expect(parseInt(value)).toBe(32);
  });
  test('смена числового значения при нажатии кнопки вниз', async () => {
    await inputPage.fillInput('11');
    await inputPage.pressArrowDown();
    const value = await inputPage.inputValue();
    expect(parseInt(value)).toBe(10);
  });
});
