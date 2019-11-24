import {createMainMenuTemplate} from './components/main-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createTaskTemplate} from './components/task.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';

/**
 * Рендерит разметку
 *
 * @param {object} container -  контейнер в который вставляется разметка
 * @param {opject} template - шаблон вставляемой разметки
 * @param {string} place - место вставки в контейнере
 */
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteControlElement = siteMainElement.querySelector(`.main__control`);

render(siteControlElement, createMainMenuTemplate(), `beforeEnd`);
render(siteMainElement, createFilterTemplate(), `beforeEnd`);
render(siteMainElement, createBoardTemplate(), `beforeEnd`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate(), `beforeEnd`);

const TASK_COUNT = 3;
new Array(TASK_COUNT)
  .fill(``)
  .forEach(
      () => render(taskListElement, createTaskTemplate(), `beforeEnd`)
  );

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeEnd`);
