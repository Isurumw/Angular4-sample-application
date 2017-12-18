import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log(value);
    if (value == "aaa") {
      return "bbb";
    } else {
      return "ccc";
    }
  }

}
