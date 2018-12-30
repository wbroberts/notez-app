import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';

import { NoteItemComponent } from './../../components/note-item/note-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoteDetailModal } from '../../components/note-detail/note-detail.modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ]),
    SharedModule
  ],
  declarations: [ListPage, NoteItemComponent, NoteDetailModal],
  entryComponents: [NoteDetailModal]
})
export class ListPageModule {}
