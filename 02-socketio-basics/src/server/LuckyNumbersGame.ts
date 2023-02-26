export default class LuckyNumbersGame {
    public LuckyNumbers: { [id: string]: number } = {}

    constructor() {
    }

    public GetWinners(number: number): string[] {
        let ret: string[] = []
        for (let key in this.LuckyNumbers) {
            if (number === this.LuckyNumbers[key]) {
                ret.push(key)
            }
        }
        return ret
    }
}