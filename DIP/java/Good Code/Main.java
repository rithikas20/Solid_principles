public class Main {
    public static void main(String[] args) {

        Database db = new MySQLDatabase();
        BankService service = new BankService(db);
        service.openAccount();

        // Switch DB without modifying BankService
        service = new BankService(new MongoDatabase());
        service.openAccount();
    }
}
