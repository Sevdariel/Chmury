import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamerEditComponent } from './streamer/streamer-edit/streamer-edit.component';

const routes: Routes = [
  {
    path: 'add',
    component: StreamerEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
