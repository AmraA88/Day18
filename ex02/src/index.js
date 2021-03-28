function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {
    for (x = 1; x < 6; x++) {
        yield x;
    }
}
function* insideGenerator2() {
    for (x = 10; x < 16; x++) {
        yield x;
    }
}
function* insideGenerator3() {
    for (x = 6; x < 10; x++) {
        yield x;
    }
}
const iterator = myGenerator();
let fifteenArray = []
for (let i = 0; i<=15; i++) {
    fifteenArray[i] = iterator.next().value;
    if(fifteenArray[i] === undefined) {
        fifteenArray[i] = "undefined!";
    }
}
console.log(fifteenArray.join("#,"));
module.exports = { fifteenArray, myGenerator };