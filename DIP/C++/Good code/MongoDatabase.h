#include <iostream>
#include "Database.h"

class MongoDatabase : public Database {
public:
    void save() override {
        std::cout << "Saved using MongoDB\n";
    }
};
