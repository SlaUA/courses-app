import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  startLoading() {
    this.isLoading.next(true);
  }

  stopLoading() {
    this.isLoading.next(false);
  }

  getIsLoading() {
    return this.isLoading.asObservable();
  }
}

