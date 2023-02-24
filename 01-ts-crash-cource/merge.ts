interface Quux {
    quuz: string
}

interface Quux {
    corge: number
}

function someFun(bar: Quux): string {
    return "Hello, " + bar.quuz + " " + bar.corge
}

let qBar: Quux = {
    corge: 123,
    quuz: "ABC"
}

console.log(someFun(qBar))