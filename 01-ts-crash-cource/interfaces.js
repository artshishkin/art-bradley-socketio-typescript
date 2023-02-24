function someFun(bar) {
    return "Hello, " + JSON.stringify(bar);
}
var qBar = {
    corge: 1,
    quuz: "ABC"
};
console.log(someFun(qBar));
