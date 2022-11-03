import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';

const routes: Routes = [
  {
    path: 'apple',
    component: AppleComponent,
  },
  {
    path: 'banana',
    component: BananaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
