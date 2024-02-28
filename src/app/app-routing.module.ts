import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

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
  },
  {
    path: 'thoughts/delete/:id',
    component: DeleteThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
