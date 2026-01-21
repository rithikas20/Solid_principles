import { Database } from "./Database";

export class MySQLDatabase implements Database {
    save(): void {
        console.log("Saved using MySQL");
    }
}
