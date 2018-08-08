import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../services/courses-service/courses.service';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(value: Course[]): Course[] {
    return value.sort((a, b) => a.date - b.date);
  }
}
