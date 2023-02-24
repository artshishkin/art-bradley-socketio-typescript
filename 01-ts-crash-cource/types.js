function someFunT(bar) {
    return "Hello, " + JSON.stringify(bar);
}
var qBar = {
    corge: 1,
    quuz: "ABC"
};
console.log(someFunT(qBar));
