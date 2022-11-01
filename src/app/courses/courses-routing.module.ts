import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './../courses/courses/courses.component';

const routes: Routes = [
  {path: '', component: CoursesComponent} //criando o componente e passando ele
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
