import { LoanEligible } from "./LoanEligible";

export class LoanAccount implements LoanEligible {
    applyLoan(): void {
        console.log("Loan applied");
    }
}
