class Account {
    public void withdraw(double amount) {
        System.out.println("Amount withdrawn: " + amount);
    }
}

class FixedDepositAccount extends Account {
    @Override
    public void withdraw(double amount) {
        throw new UnsupportedOperationException("Withdrawal not allowed");
    }
}

public class Main {
    public static void main(String[] args) {
        Account account = new FixedDepositAccount(); // substitution
        account.withdraw(100.0); //  runtime crash
    }
}
