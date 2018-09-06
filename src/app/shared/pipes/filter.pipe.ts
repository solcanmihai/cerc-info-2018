import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log("Search text: ", searchText);

    if(searchText == null || searchText == '' || searchText == undefined){
      return items;
    }

    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it['name'].toString().toLowerCase().includes(searchText);
    });
   } 

}
