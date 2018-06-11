import { Pipe, PipeTransform } from '@angular/core';
import {IData} from '../services/widget-data.service';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(data: IData[], selectedType: string): any {
    if ( !selectedType ) {
        return data;
    }
    return data.filter( (item: IData) =>
        (item.type === selectedType)
    );
  }
}
