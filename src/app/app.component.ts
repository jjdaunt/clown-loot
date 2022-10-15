import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item } from '../models/item';
import { Raider } from '../models/raider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Item[] = [];
  raiders: Raider[] = [];
  raids: String[] = [
    "Naxxramas N10", "Naxxramas N25",
    "Eye of Eternity N10", "Eye of Eternity N25",
    "Obsidian Sanctum N10", "Obsidian Sanctum N25",
    "Vault of Archavon N10", "Vault of Archavon N25",
    "Ulduar N10", "Ulduar N25",
    "Trial of the Crusader N10", "Trial of the Crusader N25",
    "Trial of the Crusader H10", "Trial of the Crusader H25",
    "Icecrown Citadel N10", "Icecrown Citadel N25",
    "Icecrown Citadel H10", "Icecrown Citadel H25",
    "Ruby Sanctum N10", "Ruby Sanctum N25",
    "Ruby Sanctum H10", "Ruby Sanctum H25",
  ];
  currentRaid: string = "";

  lootControl = new FormControl('');

  ngOnInit(): void {
    fetch('../assets/items.json').then(res => {
      res.json().then(jsonData => {
        this.items = jsonData;
      });
    });
  }

  importData(data: JSON): void {
    this.raiders = [];
  }

  addRaider(): void {
    this.raiders.push({name: "", bench: false, targets: [], history: []});
  }

  removeRaider(i: number) {
    this.raiders.splice(i, 1);
  }
}
