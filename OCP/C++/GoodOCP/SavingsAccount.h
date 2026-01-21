#ifndef SAVINGS_ACCOUNT_H
#define SAVINGS_ACCOUNT_H

#include "InterestCalculator.h"

class SavingsAccount : public InterestCalculator {
public:
    double calculate(double balance) override {
        return balance * 0.04;
    }
};

#endif
