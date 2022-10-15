import { Item } from "./item";

export class History {
    item: Item
    date: Date

    constructor(history: History) {
        this.item = history.item;
        this.date = history.date;
    }
}