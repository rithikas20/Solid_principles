#include "SavingsAccount.h"
#include "LoanAccount.h"

int main() {

    SavingsAccount sa;
    sa.deposit(1000);
    sa.withdraw(500);

    LoanAccount la;
    la.applyLoan();

    return 0;
}
