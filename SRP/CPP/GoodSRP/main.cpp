#include <iostream>
#include "BankAccount.h"
#include "InterestService.h"
#include "AccountRepository.h"
#include "NotificationService.h"

int main() {

    BankAccount account(10000);
    InterestService interest;
    AccountRepository repo;
    NotificationService notify;

    account.deposit(interest.calculate(account.getBalance()));
    repo.save();
    notify.send();

    std::cout << "Final Balance: " << account.getBalance();
}
