import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchQuery: string, key: string): any[] {
    if (!items || !searchQuery) {
      return items;
    }

    searchQuery = searchQuery.toLowerCase();
    return items.filter(item =>
      item[key].toLowerCase().includes(searchQuery)
    );
  }
}
