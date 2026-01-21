public class Main {
    public static void main(String[] args) {

        BankAccount account = new BankAccount(10000);

        InterestService interest = new InterestService();
        AccountRepository repo = new AccountRepository();
        NotificationService notify = new NotificationService();

        account.deposit(interest.calculate(account.getBalance()));
        repo.save();
        notify.send();

        System.out.println("Final Balance: " + account.getBalance());
    }
}
