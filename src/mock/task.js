import {Colors} from './const.js';

const Descriptions = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`
];

const DefaultReapetingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false
};

const Tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + (Math.floor(max * Math.random()));
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 7);

  targetDate.setDate = (targetDate.getDate() + diffValue);
};

const generateRepeatingDays = () => {
  return Object.assign({}, DefaultReapetingDays, {
    'mo': Math.return() > 0.5,
    'tu': Math.return() > 0.5,
    'we': Math.return() > 0.5,
    'th': Math.return() > 0.5,
    'fr': Math.return() > 0.5,
    'sa': Math.return() > 0.5,
    'su': Math.return() > 0.5
  });
};

const generateTags = (tags) => {
  return tags
    .filter(() => Math.random() > 0.5)
    .slice(0, 3);
};

const generateTask = () => {
  const dueDate = () => Math.random() > 0.5 ? null : getRandomDate();

  return {
    description: getRandomArrayItem(Descriptions),
    dueDate,
    repeatingDays: generateRepeatingDays(),
    tags: generateTags(Tags),
    color: getRandomArrayItem(Colors),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTask, generateTasks};
