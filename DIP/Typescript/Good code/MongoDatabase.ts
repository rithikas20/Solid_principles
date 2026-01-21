import { Database } from "./Database";

export class MongoDatabase implements Database {
    save(): void {
        console.log("Saved using MongoDB");
    }
}
