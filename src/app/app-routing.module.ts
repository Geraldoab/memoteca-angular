import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'listThoughts',
      pathMatch: 'full'
  },
  {
      path: 'createThought',
      component: CreateThoughtComponent
  },
  {
      path: 'listThoughts',
      component: ThoughtsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
