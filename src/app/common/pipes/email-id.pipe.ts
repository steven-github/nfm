import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailID',
})
export class EmailIDPipe implements PipeTransform {
  transform(value: string): unknown {
    console.log('value', value.split(',')[0]);
    return value.split(',')[0];
  }
}
