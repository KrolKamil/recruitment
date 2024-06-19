import { Category } from '../../../mockedApi';
import { CategoryListElement } from '../../types';

export type ShowOnHomeStrategy = (
  categoryListElement: CategoryListElement,
  index: number
) => boolean;

export interface ApplyShowOnHomeRulesInput {
  categoryListElements: CategoryListElement[];
  categories: Category[];
}
