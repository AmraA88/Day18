let one = new Set ([1, 2, 3, 4, 5]);
let two = new Set ([6, 4, 3, 2]);

unionSet = new Set([...one].concat([...two]));
console.log(unionSet);
intersectionSet = new Set([...one].reduce([...two]));
console.log(intersectionSet);

module.exports = { unionSet, intersectionSet, differentsectionSet };