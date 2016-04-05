# promise-circuit
> Create a circuit-type flow for Promise functions.

Create a series of Promise-returning functions (with prepared arguments):
```javascript
const foo = new Circuit();

for (let item of something) {
  foo.add(myFn, [item, -item]);
}

foo.run().then(results => {
  // ...
});
```

## Installation
```shell
$ npm install --save promise-circuit
```

## Usage
```javascript
import Circuit from 'promise-circuit';
```
### `new Circuit([series])`
Create a circuit.
 - `series` (`Array`): Pre-provided series.

Series format:
```javascript
new Circuit([[fn, args], [fn, args]]);
```
#### `Circuit#add(fn, [args])`
Add a promise function to the circuit.
 - `fn` (`function`): A promse-returning (or _thenable_) function.
 - `args` (`Array`): Arguments to be passed in once the circuit is ran.

#### `Circuit#run()`
Run the series of promise functions in a circuit-like flow.

Returns `Promise` with all the results of the circuit.

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
