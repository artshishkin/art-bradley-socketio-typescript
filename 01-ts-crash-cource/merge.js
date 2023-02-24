function someFun(bar) {
    return "Hello, " + bar.quuz + " " + bar.corge;
}
var qBar = {
    corge: 123,
    quuz: "ABC"
};
console.log(someFun(qBar));
