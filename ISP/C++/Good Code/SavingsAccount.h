#include <iostream>
#include "Depositable.h"
#include "Withdrawable.h"

class SavingsAccount : public Depositable, public Withdrawable {
public:
    void deposit(double amount) override {
        std::cout << "Deposited " << amount << std::endl;
    }
    void withdraw(double amount) override {
        std::cout << "Withdrawn " << amount << std::endl;
    }
};
