#include <iostream>
using namespace std;

class InterestCalculator {
public:
    double calculate(string type, double balance) {
        if (type == "SAVINGS") return balance * 0.04;
        if (type == "CURRENT") return 0;
        if (type == "LOAN") return balance * 0.08;
        return 0;
    }
};

int main() {
    InterestCalculator calc;
    cout << calc.calculate("SAVINGS", 10000);
}
