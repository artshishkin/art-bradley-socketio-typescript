class Grault {
    private garply: string;

    constructor(quux: Quux, waldo: number[]) {
        this.garply = quux.quuz + " " + quux.corge + " " + waldo;
    }

    public getGarply(): string {
        return this.garply;
    }
}

interface Quux {
    quuz: string
    corge: number
}

let qBar: Quux = {
    corge: 1,
    quuz: "ABC"
}

let someN = [1, 2, 3]

let grault = new Grault(qBar, someN)

console.log(grault.getGarply())

try {
    document.body.innerHTML = grault.getGarply()
} catch (e) {}