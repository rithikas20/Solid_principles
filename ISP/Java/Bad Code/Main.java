interface AccountOperations {
    void deposit();
    void withdraw();
    void calculateInterest();
    void applyLoan();
}

class SavingsAccount implements AccountOperations {

    public void deposit() {
        System.out.println("Deposit money");
    }

    public void withdraw() {
        System.out.println("Withdraw money");
    }

    public void calculateInterest() {
        System.out.println("Interest calculated");
    }

    public void applyLoan() {
        throw new UnsupportedOperationException("Loan not allowed for Savings Account");
    }
}

public class Main {
    public static void main(String[] args) {

        SavingsAccount acc = new SavingsAccount();

        acc.deposit();
        acc.withdraw();
        acc.calculateInterest();

        acc.applyLoan(); // runtime exception (intentional)
    }
}
