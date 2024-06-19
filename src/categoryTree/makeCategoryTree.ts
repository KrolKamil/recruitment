import { applyShowOnHomeRules } from './applyShowOnHomeRules/applyShowOnHomeRules';
import { deepSortCategoryListElementsByOrderAsc } from './deepSortCategoryListElementsByOrderAsc';
import { mapCategoriesToCategoryListElements } from './mapCategoriesToCategoryListElements';
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
