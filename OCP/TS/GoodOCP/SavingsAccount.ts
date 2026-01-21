import { InterestCalculator } from "./InterestCalculator";

export class SavingsAccount implements InterestCalculator {
    calculate(balance: number): number {
        return balance * 0.04;
    }
}
