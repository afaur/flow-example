// @flow

// Takes optional arg x (maybe number)
// Returns string or number
const foo = (x: ?number): string | number => (
  x ? x : "default string"
)

// Takes args a, b which should both be strings
// Returns string
function concat(a: string, b: string): string {
  return a + b;
}

module.exports = {foo, concat}
