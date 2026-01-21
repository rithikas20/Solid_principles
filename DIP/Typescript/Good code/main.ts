import { BankService } from "./BankService";
import { MySQLDatabase } from "./MySQLDatabase";
import { MongoDatabase } from "./MongoDatabase";

let service = new BankService(new MySQLDatabase());
service.openAccount();

service = new BankService(new MongoDatabase());
service.openAccount();
