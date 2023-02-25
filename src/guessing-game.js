class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        return this.number = Math.round((this.minNum + this.maxNum) / 2)
    }

    lower() {
        return this.maxNum = this.number 
    }

    greater() {
        return this.minNum = this.number 
    }
}

module.exports = GuessingGame;
