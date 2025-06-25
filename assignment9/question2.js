//Q2 - Install the lodash package using npm install lodash. and use any of its function

import _ from 'lodash'

const arr = [1, 2, 1, 4,4, 1, 3,5,7];
console.log(_.uniq(arr));

const arr2 = [1, [2, [3, [4]]]];
console.log(_.flattenDeep(arr2));

