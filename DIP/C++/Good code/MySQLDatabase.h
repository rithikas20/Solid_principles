#include <iostream>
#include "Database.h"

class MySQLDatabase : public Database {
public:
    void save() override {
        std::cout << "Saved using MySQL\n";
    }
};
