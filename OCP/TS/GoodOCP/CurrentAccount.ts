// CurrentAccount.ts
import { InterestCalculator } from "./InterestCalculator";

export class CurrentAccount implements InterestCalculator {
    calculate(balance: number): number {
        return 0;
    }
}
