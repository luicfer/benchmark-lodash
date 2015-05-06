# benchmark-lodash
beachmark for lodash in node.js
# Environment
```
lodash version : 3.8.0
node version : v1.6.3
```
## forEach
```
lodash#forEach x 1,151,542 ops/sec ±2.21% (85 runs sampled)
native#forEach x 231,432 ops/sec ±2.72% (81 runs sampled)
lodash#forEach is faster
```
## indexOf
```
lodash#indexOf x 5,864,170 ops/sec ±2.48% (79 runs sampled)
native#indexOf x 8,657,558 ops/sec ±2.00% (79 runs sampled)
native#indexOf is faster
```
## map
```
lodash#map x 919,411 ops/sec ±2.33% (82 runs sampled)
native#map x 226,308 ops/sec ±2.29% (80 runs sampled)
lodash#map is faster
```
