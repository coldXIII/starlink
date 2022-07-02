import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import intro from './intro';
import residential from './residential';
import business from './business';
import rv from './rv';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([intro, residential, business, rv]),
});
