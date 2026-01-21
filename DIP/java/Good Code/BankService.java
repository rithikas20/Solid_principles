public class BankService {

    private Database database;

    public BankService(Database database) {
        this.database = database;
    }

    public void openAccount() {
        database.save();
    }
}
