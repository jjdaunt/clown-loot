import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/models/item';

@Pipe({name: 'raidFilter'})
export class RaidFilterPipe implements PipeTransform {
    transform(items: Item[], currentRaid: string): any {
        if (!items) {
            return items;
        }
        return items.filter(item => item.raid === currentRaid);
    }
}