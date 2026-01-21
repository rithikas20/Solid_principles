#include <iostream>
#include "SavingsAccount.h"
#include "LoanAccount.h"

int main() {

    InterestCalculator* calc;

    calc = new SavingsAccount();
    std::cout << calc->calculate(10000) << std::endl;
    delete calc;

    calc = new LoanAccount();
    std::cout << calc->calculate(10000) << std::endl;
    delete calc;
}
