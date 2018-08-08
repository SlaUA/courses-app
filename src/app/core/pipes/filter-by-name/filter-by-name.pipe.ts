import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../services/courses-service/courses.service';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(value: Course[], name: string): any {
    return name ? value.filter((item) => item.name.indexOf(name) !== -1) : value;
  }
}
