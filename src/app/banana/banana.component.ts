import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css'],
})
export class BananaComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('banana init');
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      console.log(event);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
