import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EmailString',
})
export class EmailStringPipe implements PipeTransform {
  transform(value: string): string {
    console.log('value', value.split(','));
    return value.split(',')[1];
  }
}
