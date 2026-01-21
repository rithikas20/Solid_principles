public class SavingsAccount implements Depositable, Withdrawable {

    public void deposit(double amount) {
        System.out.println("Deposited " + amount);
    }

    public void withdraw(double amount) {
        System.out.println("Withdrawn " + amount);
    }
}
