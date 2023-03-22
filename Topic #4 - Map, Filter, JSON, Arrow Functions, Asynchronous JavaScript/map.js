/* const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('d', 4);
map1.set('e', 5);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output:

map1.delete('b');
map1.delete('d');
map1.delete('e');

console.log(map1.size);
// Expected output: 2 */

/* const wrongMap = new Map();
wrongMap['bla'] = 'blaa';
wrongMap['bla2'] = 'blaaa2';

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' } */


/* const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie'); // true
contacts.get('Hilary'); // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie'); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond'); // false
contacts.delete('Jessie'); // trues
console.log(contacts.size); // 1 */


// Using the Map Object
/* const myMap = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get('a string')); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function() {})); // undefined, because keyFunc !== function () {} */


//Using NaN as Map keys
/* const myMap = new Map();
myMap.set(NaN, 'not a number');

console.log(myMap.get(NaN));
// "not a number"

const otherNaN = Number('foo');
console.log(myMap.get(otherNaN));
// "not a number" */


//Iterating Map with for...of
/* const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one */

//Iterating Map with forEach()
//Maps can be iterated using the forEach() method:
/* myMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
  // 0 = zero
  // 1 = one */

  //Relation with Array objects
 /*  const kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray);

console.log(myMap.get('key1')); // "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap]);

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]
 */

//Cloning and merging Maps
/* const original = new Map([
    [1, 'one'],
  ]);
  
  const clone = new Map(original);
  
  clone.set(2, 'two');

  //console.log(clone.get(1)); // one
  console.log(clone.get(2)); 
  console.log(original.get(2));

  console.log(original === clone); // false (useful for shallow comparison) */

  const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  const second = new Map([
    [1, 'uno'],
    [2, 'dos'],
  ]);
  
  // Merge two maps. The last repeated key wins.
  // Spread syntax essentially converts a Map to an Array
  const merged = new Map([...first, ...second],);
  
  console.log(merged.get(1)); // uno
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three

