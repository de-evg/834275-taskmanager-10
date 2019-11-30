import {generateFilters} from '../mock/filter.js';

const createFilterMarkup = (filters, isChecked) => {
  const {name, count} = filters;

  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
    <label for="filter__all" class="filter__label">
      ${name} <span class="filter__${name}-count">${count}</span></label
    >`
  );
};

const createFilterTemplate = () => {
  const filterMarkup = generateFilters().map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
      ${filterMarkup}
    </section>`
  );
};

export {createFilterTemplate};
