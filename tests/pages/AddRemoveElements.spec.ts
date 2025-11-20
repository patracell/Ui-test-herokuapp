import test, { expect, Locator, Page } from '@playwright/test';
import { AddRemoveElements } from '../models/AddRemoveElements';

let addRemove: AddRemoveElements;

test.describe('Добавление и удаление элемента', () => {
  test.beforeEach(async ({ page }) => {
    addRemove = new AddRemoveElements(page);
    await addRemove.goto();
  });

  test('Добавляем 5 элементов удаляем 3, проверяем', async () => {
    await addRemove.addElem(5);
    const countAfterAdd = await addRemove.getCountOfElements();
    expect(countAfterAdd).toBe(5);

    for (let i = 0; i < 3; i++) {
      await addRemove.removeElem();
    }
    const awaitCount = await addRemove.getCountOfElements();
    expect(awaitCount).toBe(2);
  });
});
