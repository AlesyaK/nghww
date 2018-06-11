import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phone: number): any {
    return phone.toString().replace(/(\d{4})(\d{3})(\d{3})/, 'Tel:+$1 $2 $3');
  }
}
