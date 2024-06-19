import { getCategoriesIdsToShowOnHome } from '../getCategoriesIdsToShowOnHome';

import { ApplyShowOnHomeRulesInput, ShowOnHomeStrategy } from './types';

export const getStrategy = (
  input: ApplyShowOnHomeRulesInput
): ShowOnHomeStrategy => {
  const { categoryListElements, categories } = input;

  if (categoryListElements.length <= 5) {
    return () => true;
  }

  const categoriesIdsToShowOnHome = getCategoriesIdsToShowOnHome(categories);
  if (categoriesIdsToShowOnHome.length > 0) {
    return (categoryListElement) =>
      categoriesIdsToShowOnHome.includes(categoryListElement.id);
  }

  return (_, index) => index < 3;
};
