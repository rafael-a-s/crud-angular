import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //se o meu caminho for vazio deve redirecionar
  //Esse pathMatch serve para analizar o caminho todo
  {path:'', pathMatch: 'full' , redirectTo: 'courses'},
  {
    path:'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
