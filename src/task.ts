import { makeCategoryTree } from './categoryTree/makeCategoryTree';
import { getCategories } from './mockedApi';

export const categoryTree = makeCategoryTree({ getCategories });
