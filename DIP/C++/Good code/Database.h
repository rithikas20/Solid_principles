#ifndef DATABASE_H
#define DATABASE_H

class Database {
public:
    virtual void save() = 0;
    virtual ~Database() {}
};

#endif
