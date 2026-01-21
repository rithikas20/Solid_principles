class BankAccount {
    double balance;
public:
    BankAccount(double bal) : balance(bal) {}
    double getBalance() { return balance; }
    void deposit(double amt) { balance += amt; }
};
