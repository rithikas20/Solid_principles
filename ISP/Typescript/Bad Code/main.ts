interface AccountOperations {
    deposit(): void;
    withdraw(): void;
    calculateInterest(): void;
    applyLoan(): void;
}

class SavingsAccount implements AccountOperations {

    deposit(): void {
        console.log("Deposit done");
    }

    withdraw(): void {
        console.log("Withdrawal done");
    }

    calculateInterest(): void {
        console.log("Interest calculated");
    }

    applyLoan(): void {
        throw new Error("Loan not supported for Savings Account");
    }
}

// Sample usage
const account = new SavingsAccount();

account.deposit();
account.withdraw();
account.calculateInterest();
account.applyLoan(); // runtime error (intentional)
