#include <iostream>
using namespace std;

class BankAccount {
    double balance;

public:
    BankAccount(double bal) : balance(bal) {}

    void calculateInterest() {
        balance += balance * 0.04;
        cout << "Interest calculated\n";
    }

    void saveToDatabase() {
        cout << "Saved to database\n";
    }

    void sendNotification() {
        cout << "Notification sent\n";
    }

    void showBalance() {
        cout << "Final Balance: " << balance << endl;
    }
};

int main() {
    BankAccount account(10000);
    account.calculateInterest();
    account.saveToDatabase();
    account.sendNotification();
    account.showBalance();
}
