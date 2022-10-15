import { Item } from "./item";
import { History } from "./history";

export class Raider {
    name: string;
    bench: boolean;
    targets: Item[];
    history: History[];

    constructor(raider: Raider) {
        this.name = raider.name;
        this.bench = raider.bench;
        this.targets = raider.targets;
        this.history = raider.history;
    }
}