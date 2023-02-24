function foo(bar?: string) {
    return "Hello, " + bar;
}

function fooUnion(bar: "car" | "bus" | number) {
    return "Hello, " + bar;
}

let baz = "ABC";
let transport: "car" | "bus" = "car";

console.log(foo());
console.log(foo(baz));
console.log(fooUnion(transport));
console.log(fooUnion(1));