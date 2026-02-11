function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;

// module.exports="Rampravesh kumar"

// exports last one from this
// module.exports = add;
// module.exports = sub;

// if you want to exports all from here you have to use object

// module.exports = {
//   add,
//   sub,
// };
