import {createMainMenuTemplate} from './components/main-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createTaskTemplate} from './components/task.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';

const TASK_COUNT = 22;
const SHOWIING_TASKS_COUNT_ON_START = 8;
const SHOWIING_TASKS_COUNT_BY_BUTTON = 8;

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

const filters = generateFilters();
render(siteMainElement, createFilterTemplate(filters), `beforeEnd`);

render(siteMainElement, createBoardTemplate(), `beforeEnd`);

const tasks = generateTasks(TASK_COUNT);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate(tasks[0]), `beforeEnd`);
let showingTasksCount = SHOWIING_TASKS_COUNT_ON_START;

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeEnd`);
const loadMoreButton = boardElement.querySelector(`.load-more`);

const renderTasks = (tasks, showingTasksCount) => {
  let showingTasks = tasks.splice(0, showingTasksCount);
  showingTasks.forEach(
    (task) => render(taskListElement, createTaskTemplate(task), `beforeEnd`)
  );
  if (!tasks.length) {
    loadMoreButton.remove();
  }
};
renderTasks(tasks, showingTasksCount);

loadMoreButton.addEventListener(`click`, () => {
  renderTasks(tasks, showingTasksCount);
});
