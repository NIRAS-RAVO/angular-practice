import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthYear',
})
export class BirthYearPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return value.toString().substr(2, 2);
  }
}
