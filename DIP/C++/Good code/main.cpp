#include "MySQLDatabase.h"
#include "MongoDatabase.h"

class BankService {
    Database* database;
public:
    BankService(Database* db) : database(db) {}
    void openAccount() {
        database->save();
    }
};

int main() {

    MySQLDatabase mysql;
    BankService service(&mysql);
    service.openAccount();

    MongoDatabase mongo;
    BankService service2(&mongo);
    service2.openAccount();
}
