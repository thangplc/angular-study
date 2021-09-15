import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practice2Component } from './practice2/practice2.component';

const routes: Routes = [
  {
    path: "",
    component: Practice2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
