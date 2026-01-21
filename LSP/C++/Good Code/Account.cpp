#include <iostream>

class Account {
protected:
    double balance;
public:
    Account(double bal) : balance(bal) {}
};

class Withdrawable {
public:
    virtual void withdraw(double amount) = 0;
};

class SavingsAccount : public Account, public Withdrawable {
public:
    SavingsAccount(double bal) : Account(bal) {}
    void withdraw(double amount) override {
        balance -= amount;
        std::cout << "Withdrawn: " << amount << std::endl;
    }
};

class FixedDepositAccount : public Account {
public:
    FixedDepositAccount(double bal) : Account(bal) {}
};

int main() {
    Withdrawable* acc = new SavingsAccount(10000);
    acc->withdraw(2000); // ✅ safe
}
