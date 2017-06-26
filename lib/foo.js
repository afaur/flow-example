

// Takes optional arg x (maybe number)
// Returns string or number
const foo = x => x ? x : "default string";

// Takes args a, b which should both be strings
// Returns string
function concat(a, b) {
  return a + b;
}

module.exports = { foo, concat };