class MySQLDatabase {
    public void save() {
        System.out.println("Saved using MySQL");
    }
}

class BankService {

    private MySQLDatabase database = new MySQLDatabase();

    public void openAccount() {
        database.save();
    }

    public static void main(String[] args) {
        new BankService().openAccount();
    }
}
