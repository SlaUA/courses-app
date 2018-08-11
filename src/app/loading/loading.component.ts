import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../core/services/loading/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loadingSubscription: Subscription;
  isLoading: Boolean;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingSubscription = this.loadingService.getIsLoading().subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

}
