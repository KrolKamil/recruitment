import { CategoryListElement } from '../../types';

import { ShowOnHomeStrategy } from './types';

export const applyShowOnHomeStrategy = (
  categoryListElements: CategoryListElement[],
  strategy: ShowOnHomeStrategy
) =>
  categoryListElements.map((categoryListElement, index) => ({
    ...categoryListElement,
    showOnHome: strategy(categoryListElement, index),
  }));
