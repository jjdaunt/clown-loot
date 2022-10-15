export class Item {
    id: Number;
    name: string;
    raid: string;
    boss: string;
    url: string;

    constructor(item: Item) {
        this.id = item.id;
        this.name = item.name;
        this.raid = item.raid;
        this.boss = item.boss;
        this.url = item.url;
    }
}