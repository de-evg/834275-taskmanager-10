import {getRandomIntegerNumber} from './task.js';

const filterNames = [
  `all`,
  `overdue`,
  `today`,
  `favorites`,
  `repeating`,
  `tags`,
  `archive`,
];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: getRandomIntegerNumber(0, 10)
    };
  });
};

export {generateFilters};
