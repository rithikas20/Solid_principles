abstract class Account {
    protected double balance;

    public Account(double balance) {
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }
}

interface Withdrawable {
    void withdraw(double amount);
}

class SavingsAccount extends Account implements Withdrawable {

    public SavingsAccount(double balance) {
        super(balance);
    }

    public void withdraw(double amount) {
        balance -= amount;
        System.out.println("Withdrawn: " + amount);
    }
}

class FixedDepositAccount extends Account {
    public FixedDepositAccount(double balance) {
        super(balance);
    }
}

public class Main {
    public static void main(String[] args) {

        Withdrawable acc = new SavingsAccount(10000);
        acc.withdraw(2000); // ✅ safe
    }
}
