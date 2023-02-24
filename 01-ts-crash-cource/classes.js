var Grault = /** @class */ (function () {
    function Grault(quux, waldo) {
        this.garply = quux.quuz + " " + quux.corge + " " + waldo;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
var qBar = {
    corge: 1,
    quuz: "ABC"
};
var someN = [1, 2, 3];
var grault = new Grault(qBar, someN);
console.log(grault.getGarply());
try {
    document.body.innerHTML = grault.getGarply();
}
catch (e) { }
