const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const result = _.flattenDeep(items)
console.log(result) // [1, 2, 3, 4]