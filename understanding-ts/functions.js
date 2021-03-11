"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    // callback is a function which is pass in as argument, which do something with the result
    var result = n1 + n2;
    cb(result);
}
// console.log(printResult(add(5, 12)));
var combineValues;
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
