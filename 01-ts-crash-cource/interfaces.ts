interface Quux {
    quuz: string
    corge: number
}

function someFun(bar: Quux): string {
    return "Hello, " + JSON.stringify(bar)
}

let qBar: Quux = {
    corge: 1,
    quuz: "ABC"
}

console.log(someFun(qBar))