import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionShetPage } from './action-shet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionShetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionShetPageRoutingModule {}
