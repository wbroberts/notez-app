import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    loadChildren: './pages/list/list.module#ListPageModule'
  }
  // {
  //   path: 'new-note',
  //   loadChildren: './pages/new-note/new-note.module#NewNotePageModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
