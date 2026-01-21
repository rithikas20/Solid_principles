#include <iostream>
#include "LoanEligible.h"

class LoanAccount : public LoanEligible {
public:
    void applyLoan() override {
        std::cout << "Loan applied" << std::endl;
    }
};
