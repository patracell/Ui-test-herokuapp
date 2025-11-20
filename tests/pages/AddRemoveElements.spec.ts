import test, { expect, Locator, Page } from '@playwright/test';
import { AddRemoveElements } from '../models/AddRemoveElements';

let addRemove: AddRemoveElements;

test.describe('add and remove Elements', () => {
  test.beforeEach(async ({ page }) => {
    addRemove = new AddRemoveElements(page);
    await addRemove.goto();
  });

  test('add 5 elems and delete 3 ', async () => {
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
