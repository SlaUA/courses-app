import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../services/courses-service/courses.service';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(value: Course[], name: string): any {
    return value.filter((item) => item.title.indexOf(name) !== -1);
  }
}
