import { applyShowOnHomeStrategy } from './applyShowOnHomeStrategy';
import { getStrategy } from './getStrategy';
import { ApplyShowOnHomeRulesInput } from './types';

export const applyShowOnHomeRules = (input: ApplyShowOnHomeRulesInput) =>
  applyShowOnHomeStrategy(input.categoryListElements, getStrategy(input));
