public class Main {
    public static void main(String[] args) {

        SavingsAccount sa = new SavingsAccount();
        sa.deposit(1000);
        sa.withdraw(500);

        LoanAccount la = new LoanAccount();
        la.applyLoan();
    }
}
