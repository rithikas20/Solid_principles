class InterestCalculator {
    calculate(type: string, balance: number): number {
        if (type === "SAVINGS") return balance * 0.04;
        if (type === "CURRENT") return 0;
        if (type === "LOAN") return balance * 0.08;
        return 0;
    }
}

const calc = new InterestCalculator();
console.log(calc.calculate("SAVINGS", 10000));
