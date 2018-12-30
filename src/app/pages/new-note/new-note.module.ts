import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewNotePage } from './new-note.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuillComponent } from './../../components/quill/quill.component';

const routes: Routes = [
  {
    path: '',
    component: NewNotePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NewNotePage, QuillComponent]
})
export class NewNotePageModule {}
