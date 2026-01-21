#include <iostream>
#include <stdexcept>
using namespace std;

class AccountOperations {
public:
    virtual void deposit() = 0;
    virtual void applyLoan() = 0;
    virtual ~AccountOperations() {}
};

class SavingsAccount : public AccountOperations {
public:
    void deposit() override {
        cout << "Deposit done" << endl;
    }

    void applyLoan() override {
        throw runtime_error("Loan not supported");
    }
};

int main() {
    SavingsAccount acc;

    acc.deposit();

    try {
        acc.applyLoan();   // forced method → exception
    } catch (const exception& e) {
        cout << e.what() << endl;
    }

    return 0;
}
