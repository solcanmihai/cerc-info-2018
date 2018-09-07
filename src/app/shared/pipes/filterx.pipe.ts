import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterx'
})
export class FilterxPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(searchText == null || searchText == '' || searchText == undefined){
      return items;
    }

    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    console.log(items);

    return items.filter( it => {
      return it['title'].toString().toLowerCase().includes(searchText);
    });
   } }
