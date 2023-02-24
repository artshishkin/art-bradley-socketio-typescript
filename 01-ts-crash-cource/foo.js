function foo(bar) {
    return "Hello, " + bar;
}
function fooUnion(bar) {
    return "Hello, " + bar;
}
var baz = "ABC";
var transport = "car";
console.log(foo());
console.log(foo(baz));
console.log(fooUnion(transport));
console.log(fooUnion(1));
