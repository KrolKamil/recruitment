import { deepSortCategoryListElementsByOrderAsc } from './deepSortCategoryListElementsByOrderAsc';
import { mapCategoriesToCategoryListElements } from './mapCategoriesToCategoryListElements';
import { applyShowOnHomeRules } from './setShowOnHomeRules/applyShowOnHomeRules';
import { GetCategories } from './types';

interface MakeCategoryTreeDependencies {
  getCategories: GetCategories;
}

export const makeCategoryTree =
  ({ getCategories }: MakeCategoryTreeDependencies) =>
  async () => {
    const categories = (await getCategories()).data;

    const categoryListElements =
      mapCategoriesToCategoryListElements(categories);

    const categoryListElementsSorted =
      deepSortCategoryListElementsByOrderAsc(categoryListElements);

    return applyShowOnHomeRules({
      categoryListElements: categoryListElementsSorted,
      categories,
    });
  };
