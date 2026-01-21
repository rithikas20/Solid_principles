#ifndef CURRENT_ACCOUNT_H
#define CURRENT_ACCOUNT_H

#include "InterestCalculator.h"

class CurrentAccount : public InterestCalculator {
public:
    double calculate(double) override {
        return 0;
    }
};

#endif
