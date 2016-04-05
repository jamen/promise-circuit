# promise-circut
> Create a circut-type flow for Promise functions.

Create a series of Promise-returning functions (with prepared arguments):
```javascript
const foo = new Circut();

for (let item of something) {
  foo.add(myFn, [item, -item]);
}

foo.run().then(results => {
  // ...
});
```

## Installation
```shell
$ npm install --save promise-circut
```

## Usage
```javascript
import Circut from 'promise-circut';
```
### `new Circut([series])`
Create a circut.
 - `series` (`Array`): Pre-provided series.

Series format:
```javascript
new Circut([[fn, args], [fn, args]]);
```
#### `Circut#add(fn, [args])`
Add a promise function to the circut.
 - `fn` (`function`): A promse-returning (or _thenable_) function.
 - `args` (`Array`): Arguments to be passed in once the circut is ran.

#### `Circut#run()`
Run the series of promise functions in a circut-like flow.

Returns `Promise` with all the results of the circut.

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
