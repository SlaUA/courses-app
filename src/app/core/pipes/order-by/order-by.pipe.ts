import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../services/courses-service/courses.service';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: Course[]): any {
    return (value || []).sort((a, b) => a.creationDate - b.creationDate);
  }
}
