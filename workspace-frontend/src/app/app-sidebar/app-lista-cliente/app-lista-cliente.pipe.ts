import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter',
})

@Injectable()
export class AppListaClientePipe implements PipeTransform {
    transform(items: any[], filter: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!filter || !value) {
            return items;
        }

        return items.filter(singleItem =>
            singleItem[filter].toLowerCase().includes(value.toLowerCase())
        );
    }
}
