const obj = {
  a: 1
}

const obj2 = {
  ...obj,
  c: 3
}

// No hacer esto, ya no sería inmutable
// obj.b = 2

console.log(obj, obj2)
