#include <iostream>
#include <stdexcept>

class Account {
public:
    virtual void withdraw(double amount) {
        std::cout << "Withdrawn " << amount << std::endl;
    }
};

class FixedDepositAccount : public Account {
public:
    void withdraw(double) override {
        throw std::logic_error("Withdrawal not allowed");
    }
};

int main() {
    Account* acc = new FixedDepositAccount();
    acc->withdraw(1000); // 💥 crash
}
