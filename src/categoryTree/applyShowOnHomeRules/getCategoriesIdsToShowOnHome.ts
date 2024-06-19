import { Category } from '../../mockedApi';

export const getCategoriesIdsToShowOnHome = (categories: Category[]) =>
  categories
    .filter((category) => category.Title.includes('#'))
    .map((category) => category.id);
