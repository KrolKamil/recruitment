import test from 'ava';

import { CORRECT } from './correctResult';
import { categoryTree } from './task';

test('should return CORRECT category tree', async (t) => {
  const result = await categoryTree();

  t.deepEqual(result, CORRECT);
});
