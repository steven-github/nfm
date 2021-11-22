import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email',
})
export class EmailPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    // console.log('value', value);
    // console.log('...args', ...args);
    return value;
  }
}
