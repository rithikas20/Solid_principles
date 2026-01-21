#ifndef LOAN_ACCOUNT_H
#define LOAN_ACCOUNT_H

#include "InterestCalculator.h"

class LoanAccount : public InterestCalculator {
public:
    double calculate(double balance) override {
        return balance * 0.08;
    }
};

#endif
