# benchmark-lodash
beachmark for lodash in node.js
# Environment
```
lodash version : 3.8.0
node version : v1.6.3
```
## filter
```
lodash#filter x 767,673 ops/sec ±2.74% (76 runs sampled)
native#filter x 205,222 ops/sec ±2.08% (83 runs sampled)
lodash#filter is faster
```
## forEach
```
lodash#forEach x 1,048,286 ops/sec ±2.63% (80 runs sampled)
native#forEach x 239,019 ops/sec ±2.47% (83 runs sampled)
lodash#forEach is faster
```
## indexOf
```
lodash#indexOf x 5,660,437 ops/sec ±2.18% (80 runs sampled)
native#indexOf x 8,428,512 ops/sec ±2.62% (80 runs sampled)
native#indexOf is faster
```
## map
```
lodash#map x 850,888 ops/sec ±2.41% (83 runs sampled)
native#map x 200,924 ops/sec ±1.89% (80 runs sampled)
lodash#map is faster
```
