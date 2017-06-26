import { foo, concat } from './foo';

console.log(foo(1));

// Works
console.log(concat("a", "b"));

// Breaks
//console.log(concat(1, 2))