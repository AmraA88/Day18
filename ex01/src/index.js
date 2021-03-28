let myArr = [];

function* multiplication(x) {
    for (i = x+1; i>=0; i--) {
        x*=2;
        yield x;
        myArr.push(x);
    }
}
var num = multiplication(3);

for (i =0; i<3; i++) {
    console.log(num.next().value);
    console.log(num.next().value);
    console.log(num.next().value);
}
module.exports = multiplication;