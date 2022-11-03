import { BananaComponent } from './banana.component';
import { render, screen } from '@testing-library/angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('BananaComponent', () => {
  it('should have "banana works!"', async () => {
    await render(BananaComponent, {
      declarations: [BananaComponent],
      imports: [RouterTestingModule],
    });
    expect(screen.getByText('banana works!'));
  });
});
