import { Category } from '../../mockedApi';
import { CategoryListElement } from '../types';

import { getCategoriesIdsToShowOnHome } from './getCategoriesIdsToShowOnHome';

interface ApplyShowOnHomeRulesInput {
  categoryListElements: CategoryListElement[];
  categories: Category[];
}

export const applyShowOnHomeRules = ({
  categoryListElements,
  categories,
}: ApplyShowOnHomeRulesInput) => {
  if (categoryListElements.length <= 5) {
    return categoryListElements.map((categoryListElement) => ({
      ...categoryListElement,
      showOnHome: true,
    }));
  }

  const categoriesIdsToShowOnHome = getCategoriesIdsToShowOnHome(categories);
  if (categoriesIdsToShowOnHome.length > 0) {
    return categoryListElements.map((categoryListElement) => ({
      ...categoryListElement,
      showOnHome: categoriesIdsToShowOnHome.includes(categoryListElement.id),
    }));
  }

  return categoryListElements.map((categoryListElement, index) => ({
    ...categoryListElement,
    showOnHome: index < 3,
  }));
};
