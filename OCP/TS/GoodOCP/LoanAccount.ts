import { InterestCalculator } from "./InterestCalculator";

export class LoanAccount implements InterestCalculator {
    calculate(balance: number): number {
        return balance * 0.08;
    }
}
