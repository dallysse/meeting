import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanctions'
})
export class SanctionsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
