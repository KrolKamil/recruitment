import { CategoryListElement } from './types';

const iterate = (category: CategoryListElement) => ({
  ...category,
  children: deepSortCategoryListElementsByOrderAsc(category.children),
});

export const deepSortCategoryListElementsByOrderAsc = (
  categoryListElements: CategoryListElement[]
) => {
  return categoryListElements.map(iterate).sort((a, b) => a.order - b.order);
};
