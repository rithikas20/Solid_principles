public class BankAccount {

    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void calculateInterest() {
        balance += balance * 0.04;
        System.out.println("Interest calculated");
    }

    public void saveToDatabase() {
        System.out.println("Saved account to database");
    }

    public void sendNotification() {
        System.out.println("Notification sent to customer");
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(10000);
        account.calculateInterest();
        account.saveToDatabase();
        account.sendNotification();
        System.out.println("Final Balance: " + account.balance);
    }
}
