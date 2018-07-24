import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const restMinutes = value % 60;
    const minutes = restMinutes ? `${restMinutes}min` : '';

    if (hours < 1) {
      return `${value}min`;
    } else {
      return `${hours}h ${minutes}`;
    }
  }
}
