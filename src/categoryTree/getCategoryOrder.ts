import { Category } from '../mockedApi';

export const getCategoryOrder = (category: Category) => {
  const orderFromTitle = parseInt(category.Title);

  return Number.isInteger(orderFromTitle) ? orderFromTitle : category.id;
};
