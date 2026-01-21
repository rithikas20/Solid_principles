#ifndef INTEREST_CALCULATOR_H
#define INTEREST_CALCULATOR_H

class InterestCalculator {
public:
    virtual double calculate(double balance) = 0;
    virtual ~InterestCalculator() {}
};

#endif
