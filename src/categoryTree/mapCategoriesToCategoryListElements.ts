import { Category } from '../mockedApi';

import { getCategoryOrder } from './getCategoryOrder';
import { CategoryListElement } from './types';

export const mapCategoriesToCategoryListElements = (
  categories: Category[]
): CategoryListElement[] =>
  categories.map((category) => ({
    id: category.id,
    image: category.MetaTagDescription,
    name: category.name,
    order: getCategoryOrder(category),
    children: mapCategoriesToCategoryListElements(category.children),
    showOnHome: false,
  }));
