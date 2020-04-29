module.exports = {
  add,
};

function add(args) {
  const values = Array.isArray(args) ? args : Array.from(arguments);

  // if (Number.isNaN(a)) {
  //   throw new Error("bad param");
  // }

  // if (Number.isNaN(b)) {
  //   throw new Error("bad param");
  // }

  return values.reduce((sum, value) => {
    if (typeof value !== "number") {
      throw new Error("invalid args");
    }
    return sum + value;
  }, 0);
}
