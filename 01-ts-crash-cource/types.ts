type QuuxT = {
    quuz: string
    corge: number
}

function someFunT(bar: QuuxT): string {
    return "Hello, " + JSON.stringify(bar)
}

let qBar: QuuxT = {
    corge: 1,
    quuz: "ABC"
}

console.log(someFunT(qBar))