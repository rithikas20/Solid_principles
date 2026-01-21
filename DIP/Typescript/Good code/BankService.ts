import { Database } from "./Database";

export class BankService {
    constructor(private database: Database) {}

    openAccount() {
        this.database.save();
    }
}
