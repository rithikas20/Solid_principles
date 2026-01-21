var InterestCalculator = /** @class */ (function () {
    function InterestCalculator() {
    }
    InterestCalculator.prototype.calculate = function (type, balance) {
        if (type === "SAVINGS")
            return balance * 0.04;
        if (type === "CURRENT")
            return 0;
        if (type === "LOAN")
            return balance * 0.08;
        return 0;
    };
    return InterestCalculator;
}());
var calc = new InterestCalculator();
console.log(calc.calculate("SAVINGS", 10000));
