import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css'],
})
export class AppleComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('apple init');
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      console.log(event);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
