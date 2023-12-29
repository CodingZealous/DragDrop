import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [{
  path:'drag',component:DragDropComponent,pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
