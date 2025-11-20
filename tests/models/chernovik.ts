import test, { expect, Locator, Page } from '@playwright/test';

interface HoverFigure {
  locator: (page: Page) => Locator;
  name: string;
  attrubute: {
    type: string;
    value: string;
  };
}

export class Hover {
  readonly page: Page;
  readonly figure: Locator;
  readonly HoverFigure: HoverFigure[];

  constructor(page: Page) {
    this.page = page;
    this.figure = page.locator('div.figure');
    this.HoverFigure = [
      {
        locator: (page: Page): Locator => page.getByText('name: user1 View profile'),
        name: 'name: user1',
        attrubute: {
          type: 'href',
          value: '/users/1',
        },
      },
      {
        locator: (page: Page): Locator => page.getByText('name: user2 View profile'),
        name: 'name: user2',
        attrubute: {
          type: 'href',
          value: '/users/2',
        },
      },
      {
        locator: (page: Page): Locator => page.getByText('name: user3 View profile'),
        name: 'name: user3',
        attrubute: {
          type: 'href',
          value: '/users/3',
        },
      },
    ];
  }
  async goToHove() {
    await this.page.goto('https://the-internet.herokuapp.com/hovers');
  }
  async hiddenElems() {
    for (const { locator, name, attrubute } of this.HoverFigure) {
      await expect(locator(this.page)).toBeHidden();
    }
  }
  async hoverToElems() {
    for (const { locator, name, attrubute } of this.HoverFigure) {
      await locator(this.page).hover();
    }
  }
}

// const cards = document.querySelectorAll('.flex-grow');

// const parsers = [];

// cards.forEach((card) => {
//   const nameElem = card.querySelector('.text-xl.font-semibold.mt-4');
//   const descElem = card.querySelector('.text-sm.mt-1.dark\\:text-slate-400.text-gray-600');

//   const name = nameElem ? nameElem.textContent.trim() : '';
//   const description = descElem ? descElem.textContent.trim() : '';

//   parsers.push({ name, description });
// });

// console.log(parsers);

// // Получаем весь текст страницы, исключая скрипты и стили
// function getPageText() {
//   // Создаём временный элемент для очистки
//   const clone = document.cloneNode(true);

//   // Удаляем все скрипты и стили
//   clone.querySelectorAll('script, style').forEach(el => el.remove());

//   // Получаем текстовое содержимое
//   return clone.innerText || clone.textContent;
// }

// function countWordsLongerThan3() {
//   const text = getPageText();

//   // Приводим текст к меньшему регистру и удаляем пунктуацию
//   const cleanedText = text.toLowerCase().replace(/[^\w\s]/g, ' ');

//   // Разделяем на слова по пробелам
//   const words = cleanedText.split(/\s+/).filter(word => word.length > 3);

//   return words.length;
// }

// console.log('Количество слов длиной более 3 символов:', countWordsLongerThan3());
