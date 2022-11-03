import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppleComponent } from './apple.component';

describe('AppleComponent', () => {
  let fixture: ComponentFixture<AppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppleComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppleComponent);
    fixture.detectChanges();
  });

  it('should have "apple works!"', async () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('apple works!');
  });
});
